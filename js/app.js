function alterarStatus(id){
     let gameClicado = document.getElementById(`game-${id}`);
     let imagem = gameClicado.querySelector('.dashboard__item__img');
     let botao = gameClicado.querySelector('.dashboard__item__button');
     /*
     /----test implementation-----/
     take the name of game with css query selector

     let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
     alert(nomeJogo.textContent);
     
     */

     if (imagem.classList.contains('dashboard__item__img--rented')) {
          imagem.classList.remove('dashboard__item__img--rented');
          botao.classList.remove('dashboard__item__button--return');
          botao.textContent = 'Alugar';
     } else {
          imagem.classList.add('dashboard__item__img--rented');
          botao.textContent = 'Devolver';
          botao.classList.add('dashboard__item__button--return');
     }
}