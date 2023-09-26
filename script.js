const mario = document.querySelector('.mario'); /* seletor de css */
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); /*adicionar class jump */

    setTimeout (() => {             /* para que o mario continue pulando e ñ pule só 1 vez */
                                            
        mario.classList.remove('jump');            
    
    }, 500);
}

const loop = setInterval (() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;      /* descobrir distancia do cano */ 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <=  120 && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = 'none';              /* os dois comandos param o cano */
        pipe.style.left = '$(pipePosition);px';

        mario.style.animation = 'none';             /* os dois comandos param o mario */
        mario.style.bottom = '$(marioPosition);px';
       
        mario.src = "./images/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }


}, 10);

document.addEventListener('keydown', jump);

