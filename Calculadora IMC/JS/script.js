import { Modal } from "./modal.js"
import { AlertError } from "./alert.js"
import { calculateIMC, notNumber } from "./utils.js"

//variáveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputheight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputheight.oninput = () => AlertError.close()

form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputheight.value

    const weightOrHeightIsNaN = (notNumber(weight)) || (notNumber(height))

    if (weightOrHeightIsNaN) {
        AlertError.open()
        return;
    }

    AlertError.close()


    const result = calculateIMC(weight, height)
    displayResultMessage(result)
    
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}
