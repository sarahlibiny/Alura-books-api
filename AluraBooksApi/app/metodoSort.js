let btnOrdenar = document.getElementById('btnOrdenarPorPreco');

btnOrdenar.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}