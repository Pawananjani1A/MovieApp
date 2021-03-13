const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express();

  server.use(express.json());

const moviesData = require("./data.json");


  server.get('/api/v1/movies',(req,res)=>{
     return res.json(moviesData);
  })

  server.post('/api/v1/movies',(req,res)=>{
      const movie = req.body;
     return res.json({...movie,createdTime:new Date().toISOString(),author:"Tester"});
  })

  server.get('/api/v1/movies/:id',(req,res)=>{
      const {id} = req.params;
      const movie = moviesData.find(m=>m.id===id);
     return res.json(movie);
  })

  server.delete('/api/v1/movies/:id',(req,res)=>{
     const {id} = req.params;
     return res.json({message:`Deleting movie with id=${id}`});
  })

  //we're handling all the requests coming to our server
  server.get('*', (req, res) => {
      //nextjs is handling requests
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})