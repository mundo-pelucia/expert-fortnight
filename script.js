const listaCarrinho = document.getElementById('lista-carrinho');
let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        listaCarrinho.appendChild(li);
    });
}

function irParaPagamento() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Redirecionando para formas de pagamento...');
    window.location.href = 'https://www.mercadopago.com.br/';
}