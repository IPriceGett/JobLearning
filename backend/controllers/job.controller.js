const db = require("../db/db");

const deleteJob = async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id);
    db.query("DELETE FROM offer WHERE ID = ?", [id], (error, results) => {
        if (error) res.status(400).send("Error al obtener ofertas");
        res.status(200).send({ exito: "je" });
    });
};

const getByOwner = async (req, res, next) => {
    var id = req.body.userid;
    db.query("SELECT * FROM user WHERE ID = ?", [id], (error, results) => {
        if (error) res.status(400).send("Error al obtener oficios");
        if (results[0].Role == 1) {
            db.query("SELECT * FROM offer", (error, results) => {
                if (error) res.status(400).send("Error al obtener oficios");
                res.status(200).send(results);
            });
        } else {
            db.query(
                "SELECT * FROM offer WHERE owner = ?",
                [id],
                (error, results) => {
                    if (error) res.status(400).send("Error al obtener oficios");
                    res.status(200).send(results);
                }
            );
        }
    });
};

const getJob = async (req, res, next) => {
    var id = req.body.id;
    console.log(req.body);
    db.query("SELECT * FROM job WHERE id = ?", [id], (error, results) => {
        if (error) res.status(400).send("Error al obtener ofertas");
        res.status(200).send(results[0]);
    });
};

const list = async (req, res, next) => {
    var pass = req.body.pass;
    db.query("SELECT * FROM job", [req.body.email], (error, results) => {
        if (error) res.status(400).send("Error al obtener ofertas");
        res.status(200).send(results);
    });
};

const create = async (req, res, next) => {
    const fecha = new Date();
    console.log(req.user);
    db.query(
        "INSERT into job (created_at,updated_at,name,description,price,creator,category_fk) VALUES (?, ?, ?, ?, ?, ?, ?) ",
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
                res.status(500).send("Error del servidor");
            }
            res.status(200).send({ msg: "exito" });
        }
    );
};

module.exports = {
    create,
    list,
    getJob,
    getByOwner,
    deleteJob,
};
