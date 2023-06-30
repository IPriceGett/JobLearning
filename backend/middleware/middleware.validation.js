require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: err });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
    verifyToken
}