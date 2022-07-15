
const mario = document.querySelector('.mario');
// pegamos a imagem do mario e podemos adicionar classes a ela com classList.add
const pipe = document.querySelector('.pipe');

const jump = () => {
   mario.classList.add('jump');
   // se chamarmos jump ela adiciona a classe em mario

   // chamamos jump, ela adiciona a classe jump q da a animacao e dps chamamos setTimeout que vai remover a classe após 500ms

    setTimeout(()=>{

      mario.classList.remove('jump');

    }, 500); 
    //funcao que recebe dois parametros, 1 funcao e o tempo de duracao
}

const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft;  /* vamos pegar o deslocamento esquerdo do tubo */

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); // tirando px do final e convertendo para numeros com o +

    // com getComputedStyle pegamos as propriedades css da classe mario e acessamos o bottom, coisa que com o offsetBottom nao é possivel
   // console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
      // 1º verificamos se o tubo esta relando no mario
      // 2º verificamos se o tubo ainda esta de baixo do mario 
      // 3º verificamos se a altura do mario é menor que 80 (altura do tubo)

      pipe.style.animation = 'none';             // se o pipe for menor ou igua a 120 ele desativa a animacao
      pipe.style.left = `${pipePosition}px`;

      // pipePosition retorna a ultima posicao que ele esteve antes de parar, no caso 120, fazendo com que o tubo pare na frente do mario e nao atrás

      // parando mario no local onde ele ecosta no tubo
      mario.style.animation = 'none';             
      mario.style.bottom = `${marioPosition + 15}px`; // para na altura onde a animacao foi cancelada

      mario.src = './imagens/game-over.png'; // muda a foto do mario quando rela no tubo
      mario.style.width = '75px';
      mario.style.marginLeft = '50px'
     
      clearInterval(loop);
      // para o loop após bater no tubo
   }
}, 10);

document.addEventListener('keydown', jump);
// lembrando q keydown pega a tecla clicada
// se clicarmos em qualquer tecla ele chama a funcao jump

var btn = document.querySelector('#refresh'); // pega o id do botao

btn.addEventListener("click", function(){   // adicionamos o evento de clique ao botao e executamos a funcao quando ocorre o click
   location.reload(); // da reload na pagina quando clicamos no botao
})