const express = require('express');
const pessoas = require('./pessoasRoute');

module.exports = (app) => {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());
  app.use(pessoas);

  // app.get('/', (req, res) => {
  //   res.status(200).send('Olá');
  // });
};
