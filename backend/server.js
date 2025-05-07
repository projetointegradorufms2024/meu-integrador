// server.js
// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const doacoesRoutes = require('./routes/doacoesRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes'); // Importe as rotas de pedidos

app.use(cors());
app.use(express.json());

// Monta as rotas de pedidos
app.use('/api/pedidos', pedidosRoutes);

// Monta as rotas de doação sob /api/doacoes
app.use('/api/doacoes', doacoesRoutes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});
