const express = require('express');
const server = express();

server.use(express.json()) //utilizamos para métodos em JSON como o POST

let users = [
  {id: 1, name: "usuário 1", email: "user1@gmail.com"},
  {id: 2, name: "usuário 2", email: "user2@hotmail.com"},
  {id: 3, name: "usuário 3", email: "user3@outlook.com"}
];

//READ
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find( item => item.id === id);

  const status = user ? 200 : 404;

  return res.status(status).json(user);
})

//CREATE
server.post('/users', (req, res) => {
  const { name, email } = req.body; //server.use(express.json()) utilizado para captar aqui
  const id = users[users.length - 1].id + 1;

  const newUser = { id, name, email };
  users.push(newUser);

  return res.status(201).json(newUser);
})

//UPDATE
server.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const index = users.findIndex(item => item.id === id);

  const hasIndex = index >= 0 && index < users.length;
  const status =  hasIndex ? 200 : 404;

  if(hasIndex){
    users[index] = { id, name, email};
  }

  return res.status(status).json(users[index]);
})

//DELETE
server.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const index = users.findIndex(item => item.id === id);

  const hasIndex = index >= 0 && index < users.length;
  const status =  hasIndex ? 200 : 404;

  if(hasIndex){
    users.splice(index, 1);
  }

  return res.status(status).json();
})

server.listen(3000);