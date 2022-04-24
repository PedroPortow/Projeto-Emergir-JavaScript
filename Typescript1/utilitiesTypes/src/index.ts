type Square = {
  x: number,
  y: number,
  width: number,
  height: number
}
type PartialSquare = {
  x?: number,
  y?: number,
  width?: number,
  height?: number
}


type UpdateSquare = (a: Square, b: PartialSquare) => Square

const square: Square = {
  x: 10,
  y: 20,
  width: 100,
  height: 200
}

const square2: Square = {...square}
square2.x = 30


const updateSquare: UpdateSquare = (square, square2) => {
  return Object.assign({}, square, square2)
}

const square3 = updateSquare(square, square2)
console.log(square3)

///////////////////////////////////////////////////////////////
type Position = Pick<Square, "x" | "y">
const  positoin: Position = {
  x: 20,
  y: 50
}

type Size = Omit<Square, "x" | 'y'>
const size: Size = {
  width: 200,
  height: 300
}

type SquareColor = "red" | "blue" | "white" | "black"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "grey"

type SadSquareColor = Extract<SquareColor, SadColor>

type User = {
  readonly name: string,
  email: string,
  id?: number
}

type UserGet = Required<User>

type UserPatch = Partial<User>
const maria: UserPatch = {id: 2}

type UserRead = Readonly<User>
const daniel: User = {
  name: 'daniel',
  email: 'daniel@gmail.com'
}

// daniel.name = 'daniel tapias moraralra' //cannot assign pq é readonly
console.log(daniel)

//NonNullable
type Cpf = {cpf: string}
type Cnpj = {cnpj: string}

type User2 = Cpf | Cnpj | null | undefined
const user : NonNullable<User2> = {
  cpf: "",
  cnpj: ""
}


//////////////

type Url = {
  url: string
}

type MidiasSociais = 'fb' | 'insta' | 'yt'

const midias : Record<MidiasSociais, Url> = {
  fb: {url: 'facebook.com'} ,
  insta: {url: 'facebook.com'} ,
  yt: {url: 'facebook.com'} 
}

////////////////////////////////////////////////////////////////////
