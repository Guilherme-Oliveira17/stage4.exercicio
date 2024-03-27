let numberOne = prompt('Digite o primeiro numero: ')
let numberTwo = prompt('Digite o segundo numero: ')


numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const sum = numberOne + numberTwo
alert(`O resultado da soma é: ` +sum)

const subtraction = numberOne - numberTwo
alert(`O resultado da subtração é: ` +subtraction)

const multiplication = numberOne * numberTwo
alert(`O resultado da multiplicação é: ` +multiplication)

const division = numberOne / numberTwo
alert(`O resultado da divisão é ` +division)

const restDiv = numberOne % numberTwo 
alert(`O resto da divisão é ` +restDiv)

const PairOrNot = (sum % 2).toFixed(2)

if(PairOrNot == 0){
    alert(`A soma dos dois números é par`)
} else {
    alert(`A soma dos dois números é ímpar`)
}

if(numberOne == numberTwo){
    alert(`Os números escolhidos são iguais`)
} else {
    alert(`Os números escolhidos são diferentes`)
}