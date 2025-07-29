const express = require('express');
const router = express.Router();

// 1. Dados sobre desmatamentos e queimadas
router.get('/desmatamento', (req, res) => {
  res.json({
    rota: 'Desmatamento e Queimadas',
    conteudo: [
      "Em 2023, a Amazônia perdeu cerca de 9.000 km² de floresta, segundo dados do INPE (Instituto Nacional de Pesquisas Espaciais).",
      "O bioma Cerrado também registrou aumento nas queimadas, com mais de 20 mil focos em um único mês.",
      "Esses dados refletem a urgência em proteger nossos ecossistemas e implementar políticas ambientais mais eficazes.",
      "Fonte: https://www.gov.br/inpe"
    ]
  });
});

// 2. Causas do desmatamento e queimadas
router.get('/causas', (req, res) => {
  res.json({
    rota: 'Causas do Desmatamento e Queimadas',
    conteudo: [
      "Expansão da agropecuária: criação de pastos e plantações leva ao corte de árvores e uso do fogo para limpeza.",
      "Extração ilegal de madeira: atividade lucrativa, porém destrutiva e fora dos padrões legais.",
      "Mineração: explorações ilegais contribuem com a destruição da vegetação nativa.",
      "Infraestrutura e urbanização: abertura de estradas e expansão de cidades impactam diretamente as florestas.",
      "Falta de fiscalização e políticas públicas frágeis contribuem para o avanço do desmatamento."
    ]
  });
});

// 3. Dicas práticas de sustentabilidade
router.get('/sustentabilidade', (req, res) => {
  res.json({
    rota: 'Dicas de Sustentabilidade no Dia a Dia',
    conteudo: [
      "Reduza o consumo de plástico e prefira produtos reutilizáveis.",
      "Evite o desperdício de água e energia elétrica em casa.",
      "Dê preferência a alimentos orgânicos e de produtores locais.",
      "Separe o lixo reciclável do orgânico corretamente.",
      "Use transporte público, bicicleta ou caminhe sempre que possível.",
      "Plante árvores ou participe de projetos ambientais em sua comunidade."
    ]
  });
});

module.exports = router;

