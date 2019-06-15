const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();
const Actions = require('./data/helpers/actionModel.js')
const Projects = require('./data/helpers/projectModel.js')

server.get('/', async (req, res) => {
    try{
        const actions = await Actions.get(req.params.id)
        if (actions){
            res.status(200).json(actions)
        }
        else {
            res.status(404).json({ message: "Unable to find actions."})
        }
    }
    catch{
        res.status(500).json({ error: "Error retrieving actions."})
    }
})


module.exports = server;
