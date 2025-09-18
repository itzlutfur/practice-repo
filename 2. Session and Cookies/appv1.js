const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  session({
    secret: "tanvir",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 900000 },
  })
);

app.post("/login", (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).send("Username is required");
    } else {
        req.session.username = username;
        req.session.loggedIn = true;
        res.send(`cookie set for user: ${username}`);
    }
});

app.get("/protected", (req, res) => {
    if (req.session.loggedIn) {
        res.send(`Welcome back, ${req.session.username}`);
    } else {
        res.status(401).send("Unauthorized");
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
