const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors')

app.use(cors());
const factUrl = 'https://api.api-ninjas.com/v1/facts?limit=1'
app.get("/api", async (req, res) => {
    await axios.get(factUrl, { headers: { 'X-Api-Key': 'LCoBDEna7UlKNgeNFcnsTw==4DaMamLld9K348wO' } })
        .then((result) => res.header("Access-Control-Allow-Origin", "*")
            .status(200)
            .send(result.data[0].fact))
        .catch(e => { res.send(e) })
});

const imageUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=&hasImages=true"
app.get("/image", async (req, res) => {
    console.log('image endpoint');
    await axios.get(imageUrl)
        .then(imageResult => imageResult.data)
        .then(json => json.objectIDs[Math.floor(Math.random() * json.objectIDs.length)])
        .then(objectId => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`))
        .then(resp => resp.data)
        .then(json => ({
            url: json.primaryImageSmall,
            artist: json.artistDisplayName,
        }))
        .then(imageData => {
            // console.log(imageData)
            // res.header("Access-Control-Allow-Origin", "*")
            // .status(200)
            res.send(imageData)
        })

        .catch(e => { res.send(e) })

});

app.listen(5000, () => { console.log('Server started on port 5000') })

