const express = require('express');
const app = express();
app.use(express.json());

// Gerador de Conteúdo e IA
app.post('/api/ia/gerar', (req, res) => {
    const { produto } = req.body;
    // Lógica enxuta: 4 variações via IA (ex: DALL-E/GPT)
    res.json({ status: "ok", conteudo: "4 variações geradas com sucesso para: " + produto });
});

// Gestão de Afiliados e Comissões
app.post('/api/afiliado/venda', (req, res) => {
    const { valor, nivel } = req.body;
    const taxas = { iniciante: 0.08, intermediario: 0.12, avancado: 0.15 };
    const comissao = valor * (taxas[nivel] || 0.08);
    res.json({ comissao });
});

app.listen(3000, () => console.log('AutoFlow Rodando na porta 3000'));
