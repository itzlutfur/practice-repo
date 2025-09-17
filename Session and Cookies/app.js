const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.post("/login", (req, res) => {
  const { username } = req.body;
  res.cookie("username", username, { maxAge: 900000, httpOnly: true });
  res.send(`cookie set for user: ${username}`);
});

app.get("/protected", (req, res) => {
  const username = req.cookies.username;
    if (username=="Tanvir") { 
        res.send(`Welcome back, ${username}`);
    } else {
        res.status(401).send("Unauthorized");
    }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
