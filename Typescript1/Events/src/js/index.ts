const testeEvent1 = document.querySelector('#testEvent') as HTMLElement
const testeEvent2 = document.querySelector('#testEvent2') as HTMLElement
const testeEvent3 = document.querySelector('#testEvent3') as HTMLElement

type EventFire = (this: HTMLElement, e: MouseEvent) => void

const eventFire: EventFire = function(e: MouseEvent){
    console.log('eventFire')

    const currentTarget = e.currentTarget as HTMLElement
    const quant = this.querySelector('span') as HTMLSpanElement
    const n = parseInt(quant.textContent || "0")
    quant.textContent = (n + 1).toString()
}

testeEvent1?.addEventListener('click', eventFire)