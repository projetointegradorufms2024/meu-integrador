const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dados simulados
const pedidos = [
  { id: 1, nome: 'João Silva', tipo_tamanho: 'M', quantidade: 11, localizacao: 'Rua X, 123', email: 'joao@example.com', telefone: '11111111' },
  { id: 2, nome: 'Maria Souza', tipo_tamanho: 'adulto-m', quantidade: 20, localizacao: 'Rua Y, 456', email: 'maria@example.com', telefone: '22222222' },
  { id: 3, nome: 'KENNIA FERNANDES BARBOSA', tipo_tamanho: 'geriatrica-g', quantidade: 3, localizacao: 'cabreuva', email: 'kennia@example.com', telefone: '33333333' },
];

const doacoes = [
  { id: 1, nome: 'Carlos Souza', tipo_fralda: 'P', quantidade: 30, localizacao: 'Rua B, 456', email: 'carlos@example.com', telefone: '44444444' },
  { id: 2, nome: 'João Silvaa', tipo_fralda: 'G', quantidade: 20, localizacao: 'Rua A, 123', email: 'joao@example.com', telefone: '55555555' },
  { id: 3, nome: 'Maria Oliveira', tipo_fralda: 'M', quantidade: 25, localizacao: 'Rua das Flores, 789', email: 'mariao@example.com', telefone: '66666666' },
];

// GET para pedidos
app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});

// GET para doações
app.get('/api/doacoes', (req, res) => {
  res.json(doacoes);
});

// PUT para atualizar pedido
app.put('/api/pedidos/:id', (req, res) => {
  const { id } = req.params;
  const { nome, tipo_tamanho, quantidade, localizacao, email, telefone } = req.body;

  // Encontra o pedido
  const pedido = pedidos.find(p => p.id === parseInt(id));

  if (pedido) {
    // Atualiza o pedido com os novos dados
    pedido.nome = nome || pedido.nome;
    pedido.tipo_tamanho = tipo_tamanho || pedido.tipo_tamanho;
    pedido.quantidade = quantidade || pedido.quantidade;
    pedido.localizacao = localizacao || pedido.localizacao;
    pedido.email = email || pedido.email;
    pedido.telefone = telefone || pedido.telefone;

    res.json({ message: 'Pedido atualizado com sucesso!', pedido });
  } else {
    res.status(404).json({ message: 'Pedido não encontrado' });
  }
});

// PUT para atualizar doação
app.put('/api/doacoes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, tipo_fralda, quantidade, localizacao, email, telefone } = req.body;

  // Encontra a doação
  const doacao = doacoes.find(d => d.id === parseInt(id));

  if (doacao) {
    // Atualiza a doação com os novos dados
    doacao.nome = nome || doacao.nome;
    doacao.tipo_fralda = tipo_fralda || doacao.tipo_fralda;
    doacao.quantidade = quantidade || doacao.quantidade;
    doacao.localizacao = localizacao || doacao.localizacao;
    doacao.email = email || doacao.email;
    doacao.telefone = telefone || doacao.telefone;

    res.json({ message: 'Doação atualizada com sucesso!', doacao });
  } else {
    res.status(404).json({ message: 'Doação não encontrada' });
  }
});

// DELETE para excluir pedido
app.delete('/api/pedidos/:id', (req, res) => {
  const { id } = req.params;
  const index = pedidos.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    pedidos.splice(index, 1); // Remove o pedido
    res.json({ message: 'Pedido excluído com sucesso!' });
  } else {
    res.status(404).json({ message: 'Pedido não encontrado' });
  }
});

// DELETE para excluir doação
app.delete('/api/doacoes/:id', (req, res) => {
  const { id } = req.params;
  const index = doacoes.findIndex(d => d.id === parseInt(id));

  if (index !== -1) {
    doacoes.splice(index, 1); // Remove a doação
    res.json({ message: 'Doação excluída com sucesso!' });
  } else {
    res.status(404).json({ message: 'Doação não encontrada' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});
