const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, "WYfXVl0MzeCwbGpY0y9m5BT8fXYrcb8bEtmmTVY/CYU=");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}

module.exports = auth;