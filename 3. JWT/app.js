const express = require('express');
const app = express();
const port = 3000;  
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const JSON_SECRET_KEY = "876823gbj";

app.use(bodyParser.json());

const data = {
    "tanvir":{password:"1234"},
    "admin":{password:"1234"}
}

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).send("Invalid username or password");
    } else {
        if(data[username] && data[username].password === password){
            const token = jwt.sign({username}, JSON_SECRET_KEY, { expiresIn: '1h' });
            return res.json({token});
        } else {
            return res.status(401).send("Authentication failed");
        }
    }
})

app.get('/protected', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log("Received Token:", token);
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    res.send(`Protected data accessed with token: ${token}`);

});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});