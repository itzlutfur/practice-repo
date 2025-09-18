const express = require("express");
const app = express();
const userRoute = require("./route/user");
const {isValid, checkUserAgent} = require("./middleware/userMiddleware");
const ratelimit = require("express-rate-limit");

app.use(express.json());
app.use(checkUserAgent); // record all the logs

const rateLimiter = ratelimit({
    windowMs: 1 * 1000, // 1 sec
    max: 1, // limit each IP to 1 request per windowMs
    message: "Too many requests from this IP, please try again later"
});

app.use("/api/user",rateLimiter,isValid,userRoute);

app.listen(3000, () => console.log("Server is running on 3000"));