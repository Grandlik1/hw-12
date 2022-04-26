// Task1
// let x = 10, y = 7;
// let comparison =  x > y ? 'x больше, чем y' : 'x не больше, чем y'
// alert(comparison)
// Task2
// let num = +prompt("Введите число")
// if (num % 2  ){
//     alert(`Число ${num} нечетное `)
// } else{
//     alert(`Число ${num} четное `)
// }

// Task3
// let num = prompt('Введите целое число');
// let matchSymbol;
// if (num >= 0 ){
//     matchSymbol = 'положительное'
// } else  {
//     matchSymbol = 'отрицательное'
// }
// let numberOfDigits = num.length
// switch (numberOfDigits) {
//     case 1:
//         numberOfDigits = 'однозначное'
//         break;
//     case 2:
//         numberOfDigits = 'двухзначное'
//         break;
//     case 3:
//         numberOfDigits = 'трехзначное'
//         break;
//     case 4:
//         numberOfDigits = 'четырехзначное'
//         break;
//     default:
//         numberOfDigits = `${num.length}-значное`
//         break;
// }
// alert(`Число ${num} ${matchSymbol} ${numberOfDigits}`)

// Task4
// let num1 = +prompt()
// let num2 = +prompt()
// let num3 = +prompt()
// if ( num1 > num2 && num1 > num3){
//     alert('номер 1 больше')
// } else if (num2 > num1 && num2 > num3){
//     alert('номер 2 больше')
// } else {
//     alert('номер 3 больше')
// }

// Task5
let a = +prompt('a') //10
let b = +prompt('b') //15
let c = +prompt('c') //9
if (a + b > c && b + c > a && c + a > b  ){
 alert('все верно')
} else {
    alert ('введите другие числа, треугольник невозможен')
}
