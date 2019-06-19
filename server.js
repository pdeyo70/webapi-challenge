const express = require('express');

const db = require('./data/dbConfig');

const server = express();
const Actions = require('./data/helpers/actionModel.js')
const Projects = require('./data/helpers/projectModel.js')

server.use(express.json())

server.get('/api/projects', async (req, res) => {
    try{
        const projects = await Projects.get()
        if (projects){
            res.status(200).json(project)
        }
        else {
            res.status(404).json({ message: "Unable to find actions."})
        }
    }
    catch{
        res.status(500).json({ error: "Error retrieving actions."})
    }
})

server.get('/api/projects/:id', async (req, res) => {
    try{
        const project = await Projects.get(req.params.id);
        console.log(project)
        if (project){
            res.status(200).json(project)
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
    //console.log(req.body)
    try{
        const project = await Projects.insert(req.body);
        res.status(201).json(project);
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})

server.put('/api/projects/:id', async (req, res) => {
    try{
        const project = await Projects.update(req.params.id, req.body);
        res.status(201).json(project);
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})

server.delete('/api/projects/:id', async (req, res) => {
    try{
        const project = await Projects.remove(req.params.id);
        res.status(201).json({message: "Deleted!"});
    }
    catch{
        res.status(500).json({error: "Error deleting action."})
    }
})

server.get('/api/projects/:id/actions', async (req, res) => {
    try{
        const actions = await Projects.getProjectActions(req.params.id)
        if (actions.length){
            console.log("Hello!")
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

server.get('/api/projects/:project_id/actions/:id', async (req, res) => {
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

server.post('/api/projects/:id/actions', async (req, res) => {
    //console.log(req.body)
    try{
        const project = await Actions.insert(req.body);
        res.status(201).json(project);
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})

server.put('/api/projects/:project_id/actions/:id', async (req, res) => {
    try{
        const project = await Actions.update(req.params.id, req.body);
        res.status(201).json(project);
    }
    catch{
        res.status(500).json({error: "Error posting action."})
    }
})

server.delete('/api/projects/:project_id/actions/:id', async (req, res) => {
    try{
        const project = await Actions.remove(req.params.id);
        res.status(201).json({message: "Deleted!"});
    }
    catch{
        res.status(500).json({error: "Error deleting action."})
    }
})


module.exports = server;
