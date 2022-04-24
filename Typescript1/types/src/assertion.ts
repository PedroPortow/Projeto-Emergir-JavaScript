const teste = document.getElementById('teste') as HTMLButtonElement


//! = non null

teste.addEventListener('click', (e: MouseEvent)=> console.log(e))

export { teste }