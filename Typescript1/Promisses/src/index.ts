import axios, { AxiosResponse } from 'axios'

type ResponseUser = {
    name: string,
    id: number,
    email: string
  }

axios.get<Array<ResponseUser>>('http://localhost:3001/users').then((response) => {
    console.log(response.data)
    const res = response.data[0]
    console.log(res.id)
})

const maria: ResponseUser =  {
    name: 'maria',
    id: 2,
    email: 'maria@gmail.com'
  }

maria.id++

// axios.post<ResponseUser>('http://localhost:3001/users', maria).then((response) => {
//     response.data.id
// })

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get('http://localhost:3001/users/' + id)
}

getUser(2).then( (resposta) => console.log(resposta.data.name) )
console.log('^^^')

