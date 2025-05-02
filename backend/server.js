const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const doacoesRoutes = require('./routes/doacoesRoutes');
app.use('/api/doacoes', doacoesRoutes);

const pedidosRoutes = require('./routes/pedidosRoutes');
app.use('/api/pedidos', pedidosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
