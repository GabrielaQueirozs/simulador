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


// Logica para quebrar a lampâda
    if (recive === 3){
        let som = new Audio()
        som.src = "glassbreaking.wav"
        som.play()
        //trocar a imagem 
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

// Lógica para o operador and
    if (broken === false ) {
        if (sw1 == true && sw2 == true) {
         document.getElementById('lamp').src = "img/on.jpg"
        } else {
        document.getElementById('lamp').src = "img/off.jpg"
    }
}

