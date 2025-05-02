const db = require('./models/db'); 
 
console.log('Iniciando teste de conexao...'); 
 
async function testarConexao() { 
  try { 
    const [rows] = await db.query('SELECT 1 + 1 AS resultado'); 
    console.log('Conexao bem-sucedida! Resultado:', rows[0].resultado); 
  } catch (err) { 
    console.error('Erro na conexao com o banco de dados:', err.message); 
  } finally { 
    process.exit(); 
  } 
} 
 
testarConexao();
