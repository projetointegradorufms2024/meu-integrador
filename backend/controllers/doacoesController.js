const db = require('../models/db');

exports.receberDoacao = async (req, res) => {
  const { nome, email, telefone, localizacao, tipo_fralda, quantidade } = req.body;
  if (!nome || !email || !telefone || !localizacao || !tipo_fralda || !quantidade) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }
  try {
    const [result] = await db.execute(
      'INSERT INTO doacoes (nome, email, telefone, localizacao, tipo_fralda, quantidade) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, email, telefone, localizacao, tipo_fralda, quantidade]
    );
    res.status(201).json({ mensagem: 'Doação registrada com sucesso!', id: result.insertId });
  } catch (err) {
    console.error('Erro ao inserir doação:', err);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};

exports.listarDoacoes = async (req, res) => {
  try {
    const [doacoes] = await db.execute('SELECT * FROM doacoes');
    res.status(200).json(doacoes);
  } catch (err) {
    console.error('Erro ao listar doações:', err);
    res.status(500).json({ erro: 'Erro no servidor' });
  }
};

exports.deletarDoacao = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ erro: 'ID da doação é obrigatório.' });
  try {
    const [result] = await db.execute('DELETE FROM doacoes WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Doação não encontrada.' });
    res.status(200).json({ mensagem: 'Doação deletada com sucesso!' });
  } catch (err) {
    console.error('Erro ao deletar doação:', err);
    res.status(500).json({ erro: 'Erro no servidor ao deletar a doação.' });
  }
};

exports.atualizarDoacao = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, localizacao, tipo_fralda, quantidade } = req.body;
  if (!id || !nome || !email || !telefone || !localizacao || !tipo_fralda || !quantidade) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }
  try {
    const [result] = await db.execute(
      'UPDATE doacoes SET nome = ?, email = ?, telefone = ?, localizacao = ?, tipo_fralda = ?, quantidade = ? WHERE id = ?',
      [nome, email, telefone, localizacao, tipo_fralda, quantidade, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Doação não encontrada.' });
    res.status(200).json({ mensagem: 'Doação atualizada com sucesso!' });
  } catch (err) {
    console.error('Erro ao atualizar doação:', err);
    res.status(500).json({ erro: 'Erro no servidor ao atualizar a doação.' });
  }
};
