const express = require('express');

const db = require('./data/dbConfig');

const server = express();
const Actions = require('./data/helpers/actionModel.js')
const Projects = require('./data/helpers/projectModel.js')

server.use(express.json())

server.get('/', async (req, res) => {
    try{
        const actions = await Actions.get()
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
    try{
        const action = await Actions.get(req.params.id);
        console.log(action)
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

server.post('/api/projects', async (req, res) => {
    try{
        const project = await Projects.insert(req.body);
        console.log("project");
    
            res.status(201).json(project);
        
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})

server.put('/api/projects', async (req, res) => {
    try{
        const project = await Projects.insert(req.params.id, req.body);
        console.log("project");
    
            res.status(201).json(project);
        
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})



module.exports = server;
