import 'core-js/stable'
import axios from 'axios'

const teste = 'teste 222eaeasesaease'


const getAdress = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try{
        const res = await axios.get(url)
      
        const json = await res.data
        return json
    }
    catch(e){

    }
}

const endereco = getAdress('96010-630')
console.log()
