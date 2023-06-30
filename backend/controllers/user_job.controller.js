const db = require('../db/db');

const deletePostulation = async (req, res, next) => {
    var id = req.body.id;
    db.query("update postulation set status = 4 WHERE id= ?",
    [id],(error, results) => {
        if(error) res.status(400).send('Error al eliminar postulacion');
        res.status(200).send(results);
    });
}



const getPostulations = async (req, res, next) => {
    db.query("SELECT * FROM user_job_nav INNER JOIN job ON user_job_nav.job_id = job.id  WHERE user_job_nav.user_id = ?",
    [req.user.id],(error, results) => {
        if(error) res.status(400).send('Error al obtener postulaciones');
        res.status(200).send(results);
    });
}

const create = async (req, res, next) => {
    const fecha = new Date();
    try{
        db.query("INSERT INTO user_job_nav (user_id,job_id,created_at,state_fk) VALUES (?, ?, ?, 1) ",
            [req.user.id, req.body.job, fecha],(error, results) => {
                if (error){
                    res.status(500).send('Error del servidor');
                }
                res.status(200).send({msg:"exito al postular"});
            });
    }catch{
        res.status(500).send('Error del servidor');
    }
}

module.exports = {
    create,
    getPostulations,
    deletePostulation
}