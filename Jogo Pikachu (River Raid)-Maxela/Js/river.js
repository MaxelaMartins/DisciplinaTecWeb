
const pikachu = document.querySelector('.pikachu')
const pipe = document.querySelector('.pipe');

const jump = () => {
    pikachu.classList.add('jump');

   setTimeout(() =>{
    pikachu.classList.remove('jump');
   },500);
}
/*configuração para o pikachu bater no tubo*/

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const pikachuPosition =+window.getComputedStyle(pikachu).bottom.replace('px','');
    if(pipePosition <= 120 && pipePosition > 0 && pikachuPosition < 80) {

        pipe.style.animation ='nome';
        pipe.style.left = `${pipePosition}px`;

/*parar onde o pikachu ele encostou*/
        pikachu.style.animation ='nome';
        pikachu.style.bottom= `${pikachuPosition}px`;
         pikachu.src='./imagens/game-over.gif';
         pikachu.style.marginLeft='75px'
    }

}, 10);

document.addEventListener('keydown', jump);




   
