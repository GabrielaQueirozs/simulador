/**
 * Simulador dos operadores lógicos AND - OR -NOT
 * @author Gabriela Queiroz
 */

let recive //armazena o parametro (valor) recebido no html
//as variaveis abaixo é usada para identificar se o interruptor está loigado (true) ou desligado (false)
let sw1 = false
let sw2 = false



function sw(recive) {
    console.log(recive)

    if(recive === 1 && sw1 === false){
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    }
    else if (recive === 1 && sw1 === true){
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    }
    else if (recive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
    }
    else if (recive === 2 && sw2 === true){
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }



        let som = new Audio()
        som.src = "glassbreaking.wav"
        som.play() 
    // trocar a imagem ( manipulação do DOM)
        document.getElementById('lamp').src = "img/broken.jpg"
    }

}
    
