const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 4000;

app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
