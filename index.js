const express = require('express');
const server = express();

server.use(express.json()) //utilizamos para métodos em JSON como o POST

let customers = [
  {id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
  {id: 2, name: "Google", site: "http://google.com"},
  {id: 3, name: "UOL", site: "http://uol.com.br"}
];

//READ
server.get('/customers', (req, res) => {
  return res.json(customers);
})

server.get('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find( item => item.id === id);

  const status = customer ? 200 : 404;

  return res.status(status).json(customer);
})

//CREATE
server.post('/customers', (req, res) => {
  const { name, site } = req.body; //server.use(express.json()) utilizado para captar aqui
  const id = customers[customers.length - 1].id + 1;

  const newCustomer = { id, name, site };
  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
})

//UPDATE
server.put('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, site } = req.body;

  const index = customers.findIndex(item => item.id === id);

  const hasIndex = index >= 0 && index < customers.length;
  const status =  hasIndex ? 200 : 404;

  if(hasIndex){
    customers[index] = { id, name, site};
  }

  return res.status(status).json(customers[index]);
})

//DELETE
server.delete('/customers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const index = customers.findIndex(item => item.id === id);

  const hasIndex = index >= 0 && index < customers.length;
  const status =  hasIndex ? 200 : 404;

  if(hasIndex){
    customers.splice(index, 1);
  }

  return res.status(status).json();
})

server.listen(3000);