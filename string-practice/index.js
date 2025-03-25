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
//the chaAt()method
let str= "Queen"
let first = str[0]
console.log(first)//using the index method

let namy = "kezaqueen"
let  first1 = namy.charAt(4)
console.log(first1)//using charAt
//.toUpperCase() and .toLowerCase()
let word = "amazing" 
let modifiedword =word.toUpperCase()
console.log(modifiedword)
let wordy = "AMAZING"
let changedwordy = wordy.toLowerCase()
console.log(changedwordy)
let namy2 = "ivan"
let namy3 = "IVAN"
console.log(namy3.toLowerCase()===namy2.toLowerCase())
//the .concat() method
let characters = "Hello"
let modycharacters = characters.concat(" "+"word")
console.log(modycharacters)

let characters2 = "Akirachix"
let modychar = characters2.concat(" "+"student" + " "+ "at")
console.log(modychar)
//the .indexOf() method
let  items = "pen , books ,ruler"
let  items2 = items.indexOf("books")
console.log(items2)
let wordnotthere = "beauty"
console.log(wordnotthere.indexOf("z"))
//.slice() method
let string = "hello Akirachix"
let string1 = string.slice(2,10)
console.log(string1)
let copy = string.slice()
console.log(copy)
//.split() method
let chars = "hello beauty"
let chars2 = chars.split(" ")
console.log(chars2)
//program that turns the first character to upper case and leave the rest to lower case
let hisexcellence = "paul kagame"
let newname = hisexcellence.split(" ")
console.log(newname)
let strpresident = newname.map(president => president.charAt(0).toUpperCase() + president.slice(1)).join()
console.log(strpresident)
let splitpresident= strpresident.replace(",", " ")
console.log(splitpresident)

let president ="paul kagame";
let newpresident =president.split("kagame");
console.log(newpresident);
let firstPresident = newpresident.map(namepresident=> namepresident.charAt(0).toUpperCase()+ president.slice(1)).join()
console.log(firstPresident)
let greetings = "hy kevine";
let newgreeting = greetings.charAt(0).toUpperCase() + greetings.slice(1)
console.log(newgreeting)

let myname = "hello, queen"
let indexname = myname.indexOf("hello")
console.log(indexname)
//a program that removes all vowels from a string
let myword ="Hello world"
let newmyworld = myword.replace(/[eo]/g,"")
console.log(newmyworld)
//write a program that counts how many times a letter appear in a string
let variable = "lovelovelove" 
let newvariable = variable.split("v")
let new2variable = newvariable.length -1
console.log(newvariable)
console.log(new2variable)
let gaga = "orangeorangeorange"
let  newgaga = gaga.split("n")
console.log(newgaga)

let new2gaga = newgaga.length-1
console.log(new2gaga)
//capitalizing
let greet = "hello world";
let  greet2 = greet.split(" ");
let  greet3 = greet2.map(greeting=>greeting.charAt(0).toUpperCase() + greeting.slice(1)).join();
let  greet4 = greet3.replace(/[,]/gi," ");
console.log(greet4);
console.log(greet3);
console.log(greet2);

let favourite = "i love javascript";
let newfave = favourite.split(" ");
let new2fave = newfave.map(favfav=>favfav.charAt(0).toUpperCase() + favfav.slice(1)).join();
let new3fave = new2fave.replace(/[,]/g," ");
console.log(new3fave);
console.log(new2fave);
//finding indexOf array
let array = [1,2,3,4];
let first11 =array.indexOf(1);
console.log(first11);
let first2 = array.indexOf(4);
console.log(first2);
//adding elements to array and removing the last element in array
let array1 = [2,4,3,6]
array1.push(7)
console.log(array1)
let removedElement = array1.pop(7)
console.log(array1)
//the .map() method
let arr = [{name:"keza"},{name:"Queen"}]
let namesarr =arr.map(element=>element.name)
console.log(namesarr)
//the .forEach() method
let array2= [1,2,3,4]
let newArray2 = array.forEach(elem=>console.log(elem))
//the.filter()method
//we want to insert numbers that are only >5
let arr1 = [3,4,5,6,7,8];
let filteredArray = arr1.filter(eleme=>eleme >5);
console.log(filteredArray)
//the.some() method it retuns true if the element passes a certain condition otherwise it is false
let arr2 = [4,5,6,7];
let bool = arr2.some(el=>el >9);
console.log(bool)
//reversing a string
let str3 = "hello";
let splitstr = str3.split("");
let reverearr = splitstr.reverse();
let joinedarray = reverearr.join("");
console.log(joinedarray);









    
