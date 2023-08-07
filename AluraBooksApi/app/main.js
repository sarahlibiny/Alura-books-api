let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosAPI();


async function getBuscarLivrosAPI() {
    const resposta = await fetch(endpointAPI);
    livros = await resposta.json();
    const livrosComDesconto = aplicarDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);
}

