// routes.js

const express = require('express');
const router = express.Router();
const {
  dadosDesmatamento,
  causasDesmatamento,
  dicasSustentabilidade
} = require('./banco');

// 1. Dados sobre desmatamentos e queimadas
router.get('/desmatamento', (req, res) => {
  res.json({
    rota: 'Desmatamento e Queimadas',
    conteudo: dadosDesmatamento
  });
});

// 2. Causas do desmatamento e queimadas
router.get('/causas', (req, res) => {
  res.json({
    rota: 'Causas do Desmatamento e Queimadas',
    conteudo: causasDesmatamento
  });
});

// 3. Dicas práticas de sustentabilidade
router.get('/sustentabilidade', (req, res) => {
  res.json({
    rota: 'Dicas de Sustentabilidade no Dia a Dia',
    conteudo: dicasSustentabilidade
  });
});

module.exports = router;
