const { saveUserAgent } = require("../utils/logger");

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
  const blockedPatterns = [
    /curl/i,
    /wget/i,
    /python-requests/i,
    /Go-http-request/i,
    /Java/i,
    /sqlmap/i,
    /nmap/i,
    /Nikto/i,
    /HeadlessChrome/i,
    /PhantomJS/i,
    /PostmanRuntime/i,
  ];
  const isBlocked = blockedPatterns.some((pattern) => pattern.test(userAgent));
  saveUserAgent(userAgent);

  if (!userAgent || isBlocked) {
    return res.status(403).json({ message: "Forbidden: Invalid User-Agent" });
  }
  next();
};

module.exports = { isValid, checkUserAgent };
