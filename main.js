let products = prompt('write your products')
let commaSpilted = products.split(',')

let sum = 0

for (let i of commaSpilted) {
    let splited = i.split('-')
    price = parseInt(splited[1])
    sum += price
}
console.log(sum)

// let numbers = prompt('write numbers').split(",")

// let sum = 0
// let biggestNumber = numbers[0]

// for (let i of numbers) {
//     i = Number(i)
//     sum += i

//     if (i > biggestNumber) {
//         biggestNumber = i
//     }
// }

// console.log("sum = ", sum)
// console.log("biggest number = ", biggestNumber)