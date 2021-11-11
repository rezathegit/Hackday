const express = require('express');
const axios = require('axios');
const app = express();

const factUrl = 'https://api.api-ninjas.com/v1/facts?limit=1'
app.get("/api", async (req, res) => {
    await axios.get(factUrl, { headers: { 'X-Api-Key': 'LCoBDEna7UlKNgeNFcnsTw==4DaMamLld9K348wO' } })
        .then((result) => res.header("Access-Control-Allow-Origin", "*")
            .status(200)
            .send(result.data[0].fact))
        .catch(e => { res.send(e) })
});

app.listen(5000, () => { console.log('Server started on port 5000') })