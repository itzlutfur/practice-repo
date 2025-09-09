const express = require("express");
const app = express();
const userRoute = require("./route/user");
const {isValid, checkUserAgent} = require("./middleware/userMiddleware");

app.use(express.json());

app.use("/api/user", isValid,checkUserAgent,userRoute);

app.listen(3000, () => console.log("Server is running on 3000"));
