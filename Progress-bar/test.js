const express = require('express');

const app = express();
require('dotenv').config();
const path = require('path');
const router = require('express').Router();
const hbs = require('hbs');
const { Form } = require('./db/models');


app.set('view engine', 'hbs');
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/main', (req, res) => res.render('main'));
// let lists;
app.get('/main', (req, res) => {
  console.log('??????????????????????????');
  // проверяем есть ли в базе-нужен метод пост
  res.render('main');
});


// app.get('/allforms', async (req, res) => {
//   const lists = await Form.findAll();
//   console.log('AAAAAAAAALLLLLLLLLL LIIIIIIIIISSSSSSSSSTS',lists);
//   res.json(lists);
// });

// app.get('/alllist', (req, res) => {
//   lists = [{ fullName: 'Igor', age: 75 }, { fullName: 'Ivan', age: 26 }, { fullName: 'Petr', age: 29 }];
//   res.json( {lists} );
// });

app.get('/mylist', (req, res) => {
  lists = [ { fullName: 'Ivan', age: 26 }, { fullName: 'Petr', age: 29 }];
  res.json( {lists} );
});


app.listen(3000, () => console.log('Server has been started on port 3000'));
