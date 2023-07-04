const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const login = async (req, res, next) => {
    var pass = req.body.password;
    db.query(
        'SELECT * FROM user WHERE email = ?',
        [req.body.email],
        (error, results) => {
            bcrypt.compare(pass, results[0].password, (err, result) => {
                if (err) {
                    console.error('Error al comparar las contraseñas:', err);
                    return;
                }
                if (result) {
                    res.status(200).send({
                        token: jwt.sign(
                            {
                                id: results[0].id,
                                username: results[0].email,
                                name: results[0].name,
                            },
                            secretKey,
                            { expiresIn: '5h' }
                        ),
                    });
                } else {
                    console.log('Las contraseñas no coinciden');
                }
            });
        }
    );
};

const register = async (req, res, next) => {
    var pass = req.body.password;
    const fecha = new Date();
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(pass, salt, (err, hash) => {
            if (err) res.status(400).send('Error al registrar');
            db.query(
                'SELECT * FROM user WHERE email = ?',
                [req.body.email],
                (error, users) => {
                    if (users.length == 0) {
                        db.query(
                            'INSERT into user (name,surname,email,phone,password,birth,created_at,updated_at,login_fk, rol_fk, status_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1)',
                            [
                                req.body.name,
                                req.body.surname,
                                req.body.email,
                                req.body.phone,
                                hash,
                                fecha,
                                fecha,
                                fecha,
                                req.body.login,
                            ],
                            (error, fake) => {
                                if (error)
                                    res.status(500).send('Error del servidor');
                                db.query(
                                    'SELECT * FROM user WHERE email = ?',
                                    [req.body.email],
                                    (error, results) => {
                                        res.status(200).send({
                                            token: jwt.sign(
                                                {
                                                    id: results[0].id,
                                                    username: req.body.email,
                                                    name: req.body.name,
                                                },
                                                secretKey,
                                                { expiresIn: '1h' }
                                            ),
                                        });
                                    }
                                );
                            }
                        );
                    } else
                        res.status(400).send(
                            'Error al registrar, usuario usado'
                        );
                }
            );
        });
    });
};

module.exports = {
    register,
    login,
};
