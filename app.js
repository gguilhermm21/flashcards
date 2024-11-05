

function criarCartas(categoria, perguntas, respostas) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = ` 
    <div class="cartao-conteudo">
    <h3>${categoria}</h3>
    <div class = "cartao-pergunta">
    <p>${perguntas}</p>
    </div>
    <div class = "cartao-resposta">
    <p>${respostas}</p>
    </div>
    </div>
    `

    let respostaVisivel = false;

    function viraCartao() {
        respostaVisivel = !respostaVisivel;
        cartao.classList.toggle('active', respostaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);

}








