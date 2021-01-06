const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res
        .status(400)
        .json({ msg: "No Authentication token, authorization denied " });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res
        .status(401)
        .json({ msg: "token verification failed,authorization denied " });
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = auth;
