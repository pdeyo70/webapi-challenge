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

server.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try{
        const action = await Actions.get(req.params.id)
        if (action){
            res.status(200).json(action)
        }
        else {
            res.status(404).json({ message: "Unable to find action with this ID."})
        }
    }
    catch{
        res.status(500).json({ error: "Error retrieving action."})
    }
})

server.post('/:id', async (req, res) => {
    try{

    }
    catch{

    }
})


module.exports = server;
