async function acao(tipo, data) {
    const res = await fetch(`/api/${tipo}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return res.json();
}
// Uso: acao('ia/gerar', {produto: 'BioSoul Lavanda'});
