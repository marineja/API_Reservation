const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/train', (req, res, next) => {
  const stuff = [
    {
      _id: 'train',
      title: 'Mon train',
      description: 'Les infos de mon train',
      heuredepart: '11h',
      heurearrivé: '13h',
      garededepart: 'montpellier',
      garedarriver:'paris',
      trainId: 'qsomihvqios'
    },
   
  ];
  res.status(200).json(stuff);
});

app.post('/api/reservation', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'réservation créé !'
  });
});
module.exports = app;