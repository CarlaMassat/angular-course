// funciones basicas
function addNumber (a: any,b: any) {
return a + b;
}

addNumber(1,2)

const addNumberArrow = (c:number,d:number):string => {
return `${c + d}`
}

function multiplyResult(firstNumber: number, seconNumber?:number, base:number = 2){
    return firstNumber * base
}

// 1) interface Character
interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

// funcion que tiene objeto strider como argumento que recibe interface Character
//hp += amount 
// 50 + 10
const healCharacter = (character: Character, amount: number) => {
character.hp += amount

}

// objeto literal strider que instancia  interface Character
const strider: Character = {
name: 'Strider',
hp: 50,
showHp() {
   console.log( `Puntos de vida ${this.hp}`);
},
}
healCharacter(strider,10)

strider.showHp();



// const result: number = addNumber(1,2)
// const result2: string = addNumberArrow(3,4)
// const result3: number = multiplyResult(5)
// console.log({result, result2, result3})

export {}