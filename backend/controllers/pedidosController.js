
const db = require('../models/db');

exports.receberPedido = async (req, res) => {
  const { nome, email, telefone, localizacao, tipo_tamanho, quantidade, infoAdicional } = req.body;

  // Validação de campos obrigatórios
  if (!nome || !email || !telefone || !localizacao || !tipo_tamanho || !quantidade) {
    return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  // Validação da quantidade
  if (isNaN(quantidade) || quantidade <= 0) {
    return res.status(400).json({ erro: 'A quantidade deve ser um número válido maior que zero.' });
  }

  // Atribuir valor vazio a infoAdicional se não for fornecido
  const infoAdicionalValue = infoAdicional || '';

  // Log para verificar os dados recebidos
  console.log('Dados recebidos:', req.body);

  try {
    // Inserção no banco de dados
    const [result] = await db.execute(
      `INSERT INTO pedidos
        (nome, email, telefone, localizacao, tipo_tamanho, quantidade, informacoes_adicionais)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nome, email, telefone, localizacao, tipo_tamanho, quantidade, infoAdicionalValue]
    );

    if (result.affectedRows === 0) {
      return res.status(500).json({ erro: 'Erro ao inserir o pedido no banco de dados.' });
    }

    res.status(201).json({ mensagem: 'Pedido registrado com sucesso!', id: result.insertId });
  } catch (err) {
    console.error('Erro ao inserir pedido:', err.message);
    res.status(500).json({ erro: 'Erro no servidor ao registrar o pedido.' });
  }
};

exports.listarPedidos = async (req, res) => {
  try {
    const [pedidos] = await db.execute('SELECT * FROM pedidos');
    res.status(200).json(pedidos);
  } catch (err) {
    console.error('Erro ao listar pedidos:', err);
    res.status(500).json({ erro: 'Erro no servidor ao listar os pedidos.' });
  }
};

exports.deletarPedido = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: 'ID do pedido é obrigatório.' });

  try {
    const [result] = await db.execute('DELETE FROM pedidos WHERE id = ?', [id]);

    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Pedido não encontrado.' });

    res.status(200).json({ mensagem: 'Pedido deletado com sucesso!' });
  } catch (err) {
    console.error('Erro ao deletar pedido:', err);
    res.status(500).json({ erro: 'Erro no servidor ao deletar o pedido.' });
  }
};

exports.atualizarPedido = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, localizacao, tipo_tamanho, quantidade, infoAdicional } = req.body;

  // Validação de campos obrigatórios
  if (!id || !nome || !email || !telefone || !localizacao || !tipo_tamanho || !quantidade) {
    return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  // Validação da quantidade
  if (isNaN(quantidade) || quantidade <= 0) {
    return res.status(400).json({ erro: 'A quantidade deve ser um número válido maior que zero.' });
  }

  const infoAdicionalValue = infoAdicional || '';

  try {
    const [result] = await db.execute(
      `UPDATE pedidos
       SET nome = ?, email = ?, telefone = ?, localizacao = ?, tipo_tamanho = ?, quantidade = ?, informacoes_adicionais = ?
       WHERE id = ?`,
      [nome, email, telefone, localizacao, tipo_tamanho, quantidade, infoAdicionalValue, id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Pedido não encontrado.' });

    res.status(200).json({ mensagem: 'Pedido atualizado com sucesso!' });
  } catch (err) {
    console.error('Erro ao atualizar pedido:', err);
    res.status(500).json({ erro: 'Erro no servidor ao atualizar o pedido.' });
  }
};
