import axios from "axios"

const teste = "teste 9"
const arrowFn = (n:number) => n * n
console.log(arrowFn(2))


const getAdress = async (cep:string) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const resposta = await axios.get(url)

        const json = resposta.data
        return json
    } catch (e) {
        throw e
    }
}
console.log("------")
getAdress("03136-050").then(data => console.log(data))