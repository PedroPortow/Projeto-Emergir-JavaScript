const inches = document.getElementById('inches') as HTMLInputElement
const centim = document.getElementById('centim') as HTMLInputElement

type FnListener = (this: HTMLInputElement, e: Event) => void

// function convertToCm(e): FnListener{
//     console.log(this.value)
// }
const convertToCm: FnListener = function(e){
    console.log(this.value)
    centim.value = (calculatCm(parseFloat(this.value))).toString()
}

const convertToIn: FnListener = function(e){
    inches.value = (calculateToIn(parseFloat(this.value))).toString()
}

inches.addEventListener('input', convertToCm)
centim.addEventListener('input', calculateToIn)

function calculatCm(inche: number): number{
    return inche * 2.54
}

function calculateToIn(cm: number){
    return cm * 0.393700787
}