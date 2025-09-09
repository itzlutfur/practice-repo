const isValid = (req, res, next) => {
  console.log("Token is: ", req.query.token);
  if (req.query.token === "123") {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized User" });
  }
};

const checkUserAgent = (req, res, next) => {
  const userAgent = req.headers["user-agent"];
  console.log("User-Agent: ", userAgent);

  if (!userAgent) {
    return res.status(400).json({ message: "User-Agent header is missing" });
  }
  next();
};

module.exports = {isValid, checkUserAgent};
