//extracting words from a string
let name = "queen"
let newName = name.slice(3)
console.log(name.slice(2, name.length -1))
console.log(newName)

let school = "Akirachix"
let school2 = school.slice(0,5)
console.log(school2)

let man = "kevin"
let changedman = man.slice(3,man.length)
console.log(changedman)
 //inserting characters into a string

 let fav = "i love my mother"
 let insert = "so much"
 let newfav = fav +" " +insert
 console.log(newfav)
 let beauty = "Kevine UMutoni the sunshine"
 let newBeauty = " " + "I love "
 console.log(beauty.concat(newBeauty))
 console.log(beauty.length)
 console.log(beauty.indexOf("the"))

console.log(newBeauty.concat(beauty))

let words ="i love praying"
let inserts =" " + "so much" + " "
// let newwords = words + " " + insert
// console.log(newwords)
console.log(newwords = words.slice(0,7) + insert + words.slice(6))