const fs = require('fs');
const path = require('path');

const userAgentFile = path.join(__dirname, '../userAgent.json');

const saveUserAgent = (userAgent) => {
    let data = [];
    if(fs.existsSync(userAgentFile)) {
        const raw = fs.readFileSync(userAgentFile);
        data = JSON.parse(raw);
    }
    data.push(userAgent);
    fs.writeFileSync(userAgentFile, JSON.stringify(data, null, 2));
}

module.exports = {saveUserAgent};