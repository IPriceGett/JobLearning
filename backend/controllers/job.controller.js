const db = require('../db/db');

const deleteJob = async (req, res, next) => {
    try{
        var id = req.params.id;
        // console.log(req.params.id);
        db.query('DELETE FROM offer WHERE ID = ?', [id], (error, results) => {
            if (error) res.status(404).send('Error al obtener ofertas');
            res.status(200).send({ exito: 'je' });
        });
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

const getByOwner = async (req, res, next) => {
    try{
        var id = req.body.userid;
        db.query('SELECT * FROM user WHERE ID = ?', [id], (error, results) => {
            if (error) res.status(404).send('Error al obtener oficios');
            if (results[0].Role == 1) {
                db.query('SELECT * FROM offer', (error, results) => {
                    if (error) res.status(404).send('Error al obtener oficios');
                    res.status(200).send(results);
                });
            } else {
                db.query(
                    'SELECT * FROM offer WHERE owner = ?',
                    [id],
                    (error, results) => {
                        if (error) res.status(404).send('Error al obtener oficios');
                        res.status(200).send(results);
                    }
                );
            }
        });
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

const getJob = async (req, res, next) => {
    try{
        var id = req.body.id;
        // console.log(req.body);
        db.query('SELECT * FROM job WHERE id = ?', [id], (error, results) => {
            if (error) res.status(404).send('Error al obtener ofertas');
            res.status(200).send(results[0]);
        });
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

const getJobByKey = async (req, res, next) => {
    try{
        var key = req.body.key;
        // console.log(req.body);
        db.query("SELECT * FROM job WHERE name LIKE '%?%' or description LIKE '%?%'", [key], (error, results) => {
            if (error) res.status(404).send('Error al obtener ofertas');
            res.status(200).send(results[0]);
        });
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

const list = async (req, res, next) => {
    try{
        var pass = req.body.pass;
        db.query('SELECT * FROM job', [req.body.email], (error, results) => {
            if (error) res.status(404).send('Error al obtener ofertas');
            res.status(200).send(results);
        });
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

const create = async (req, res, next) => {
    try{
        const fecha = new Date();
        console.log(req.user);
        db.query(
            'INSERT into job (created_at,updated_at,name,description,price,creator,category_fk) VALUES (?, ?, ?, ?, ?, ?, ?) ',
            [
                fecha,
                fecha,
                req.body.name,
                req.body.description,
                req.body.price,
                req.user.id,
                req.body.category,
            ],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(404).send('Error del servidor');
                }
                res.status(200).send({ msg: 'exito' });
            }
        );
    }catch{
        res.status(404).send('Error al obtener oficios');
    }
};

module.exports = {
    create,
    list,
    getJob,
    getByOwner,
    deleteJob,
    getJobByKey,
};
