document.getElementById('representanteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Pega o nome do representante
    var nome = document.getElementById('name').value.trim();

    // Remove espaços extras e converte para um formato de URL
    var nomeFormatado = nome.toLowerCase().replace(/\s+/g, '-');

    // Gera o link da página personalizada
    var url = `https://momentsparis.com.br/vendas/${nomeFormatado}`;

    // Mostra o link gerado na página
    document.getElementById('generatedLink').href = url;
    document.getElementById('generatedLink').innerText = url;
    document.getElementById('linkGerado').style.display = 'block';
});
