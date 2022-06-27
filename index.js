// notes appp basic coding but some bugs there

// let ul = document.getElementById('ul');

// let input = document.getElementById('input-text');

//   input.addEventListener('change', function () {
//     var user = this.value;

//     if (user == '') {
//       console.log('please enter something');
//     } else {
//       let new_li = document.createElement('li');
//       new_li.textContent = this.value;
//       input.value = '';
//       console.log(new_li);
//       ul.appendChild(new_li);
//     }
//   });












// ES6 we are going to learn from here

// Let

// it is a block scope.

// const -> it can not be redeclared however we can chnage the array or object values

// const a = [7,9,8]

// a.push(6)
// console.log(a)
// a.pop()
// console.log(a)
// //  buyt if try to reassign it

// a = [4,5,3,2]
// Error: Assignment to constant variable.

// difference between let/constant and ver

// console.log(x)
// var x = "hello"
/* here var is showing undefined but we have accessed it before the intialzatn*/

// console.log(y)
// let y = "hello"
/* Error: Cannot access 'y' before initialization -> here let throughs the reference error because we cant acces it befroe the ntialzatn */

// Reason is thier temporal dead zone

// ------------------Default Function Parameters------------------------

// we can pass the values directly into the parameter of the fiunction

// const gst = (price , tax= 0.7) =>
// {return price + price*tax}

// console.log(gst(200))









// ------------------ spread and rest Parameter------------------------

/*... operator is referred to as spread or rest operator, depending on how and where it is used.*/

/* spread funtion

let team = (p1, p2, game) => {
  return ( ` my team has only two players ${p1} and ${p2}. We also like to play ${game} when we get free time`)
}


const team1 = ["akshay", "tripti", "playstation"]

console.log(team(...team1))


team2 = ["john", "lukcy", "football"]
console.log(team(...team2))

*/








/* Rest oprator

The other common usage of ... is gathering all arguments together into an array. This is referred as "rest" operator.

const arr1 = [2,3,4,5]
const arr2 = [4,6,5,6]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

*/











// ---------------------Object Literal Extensions--------------------

// need to explore more about it

// ------------ Array and Object Destructuring------------------

/*
let fun = () => {
  return [2,5,6,7,8]
}

let arr = fun()
console.log(arr)  this return the array

let cars = {
  names :["honda","bmw"],
  model : 2019,
  type: "automatic"
}

console.log(cars)

let {names, type} = cars;
console.log(names[0])
console.log(type)

*/









// --------suoer in classes------

// class person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   fullname() {
//     console.log( "my name is" + this.name + ' and i am ' +this.age  + ' years old');
//   }
//   static hello() {
//     console.log('hello there');
//   }
// }

// class child extends person {
//   constructor(name, age) {    /* if we are using the parent properties, we have to call them in the instructor*/
//     super(name, age);
//     this.name = name;
//     this.age = age;
//   }
//   getname = super.fullname();   /* use super to call any property of the parent */
// }

// const person1 = new child('akshay', 34);

// console.log(person1.getname);
// // console.log(person1.hello());

// Template Literal and Delimiters

/* we are now useing' ${}' in es6 

const person = [names = "akshay", age =45]


console.log(`hi my name is ${person[0]} and i am ${person[1]} years old`) */

// for...of vs for...in

// for...of iterates over iterable objects, such as array.

// const names = ["akshay", "tripti", "playstation"]

// for (let name of names){
//   console.log(name)
// }








// for...in

// for all the enumerable properties of object

// const nicknames = ['di', 'boo', 'punkeye'];
// nicknames.size = 3;  /* here we have added the key value pair to the object*/

// console.log(nicknames). /* here we will only see ['di', 'boo', 'punkeye'] */

// // but if we run for...in on this array, we can iteratre thorugh the
// for (let nickname in nicknames) {
//     console.log(nickname);
// }










// ---------Map and WeakMap-----

/* we use set to assign the values
and get to get those values */
// const myMap  = new Map()

// const arr = [];
// const names = "akshay";

// myMap.set(arr, [3,4,5,6])

// console.log(myMap.get(arr))

// console.log(typeof myMap) /*  this ia object */










// ==========set=========

/* unique values */

/* 

const arr1 = new Set([4,5,4,3,4,5,6,5,6,7,8])

const arr_unique = new Set(arr1)

console.log(arr_unique)

for (const arr in arr_unique){
  console.log(arr)
}

let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars);


The Set object provides the following useful methods:

add(value) – appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.

clear()  – removes all elements from the Set object.

delete(value) – deletes an element specified by the value.

entries()– returns a new Iterator that contains an array of  [value, value] .

forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.

has(value) – returns true if an element with a given value is in the set, or false if it is not.

keys() – is the same as values() function.

[@@iterator] – returns a new Iterator object that contains values of all elements stored in the insertion order.

 */











/*----------------------------classes in ES6----------------------------------------------




class person {
  constructor(name, year){
    this.anem = name,
    this.year = year
  }
  current_age() {
    let date = new Date();
    let current_year = date.getFullYear()
    let current_age = current_year - this.year

    return  current_age
  }

}

const person1 = new person("akshay",1994)

const person2= new person("tripti",1988)

console.log(person1.current_age())

console.log(person2.current_age())

*/








 


/*----------------------------------------- setters and getters in the classes------------------------------------------------------



class person {
  constructor(name, year, score) {
    (this.name = name), (this.year = year), (this.score = 0);
  }
  current_age() {
    let date = new Date();
    let current_year = date.getFullYear();
    let current_age = current_year - this.year;
    return current_age;
  }

  get fullname(){
    return ` my name is ${this.name}`
  }

  // set uppername(x){
  //   this.uppername = x.toUpperCase()
  // }

}




const person1 = new person('akshay', 1994, 45);


// console.log(person1.fullname)

person.uppername = "akshay"
console.log(person.uppername)


*/









//----------------------------------------------------------------------------



/* // ---------Iterators--------------

An iterator accesses the items from a collection one at a time, while keeping track of its current position within that sequence. It provides a next() method which returns the next item in the sequence. This method returns an object with two properties: done and value.



const arr = [11,12,13];
const itr = arr[Symbol.iterator]();

console.log(itr.next()); // { value: 11, done: false }
console.log(itr.next()); // { value: 12, done: false }
console.log(itr.next()); // { value: 13, done: false }

console.log(itr.next()); 
console.log(itr.next()); // { value: undefined, done: true }

 */













/* 
---------Generators--------------------------------------------------------------------------------


// Generator functions are a new feature in ES6 that allow a function to generate many values over time by returning an object which can be iterated over to pull values from the function one value at a time.

// A generator function returns an iterable object when it's called. It is written using the new * syntax as well as the new yield keyword introduced in ES6.




function *counter() {
  let n = 1;
  while (true) {
      yield n++;
  }
}

const numbers = counter(); // returns an iterable object

console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false } */

/* 
// Most Important topic
// Promises


ES6 has native support for promises. A promise is an object that is waiting for an asynchronous operation to complete, and when that operation completes, the promise is either fulfilled(resolved) or rejected.

The standard way to create a Promise is by using the new Promise() constructor which accepts a handler that is given two functions as parameters. 


The first handler (typically named RESOLVE) is a function to call with the future value when it's ready; and the second handler (typically named REJECT) is a function to call to reject the Promise if it can't resolve the future value.

 */

// const p = new Promise((resolve, reject) => {
//   if (/* condition */) {
//     resolve(/* value */);  // fulfilled successfully
// } else {
//     reject(/* reason */);  // error, rejected
// }
// });

/* Every Promise has a method named then which takes a pair of callbacks. The first callback is called if the promise is resolved, while the second is called if the promise is rejected.
 */

// p.then((val) => console.log("Promise Resolved", val),
//        (err) => console.log("Promise Rejected", err));

// const hello = new Promise((resolve, reject) => { resolve("Hello") });

// hello.then((str) => console.log(`${str} World`))
//      .then((str) => console.log(`${str}!`)
//      .then((str) => console.log(str)) // Hello World!

/*
     Returning a value from then callbacks will pass the value to the next then callback.

const hello = new Promise((resolve, reject) => { resolve("Hello") });

hello.then((str) => `${str} World`)
     .then((str) => `${str}!`)
     .then((str) => console.log(str)) // Hello World!
When returning a promise, the resolved value of the promise will get passed to the next callback to effectively chain them together. This is a simple technique to avoid "callback hell".

const p = new Promise((resolve, reject) => { resolve(1) });

const eventuallyAdd1 = (val) => new Promise((resolve, reject) => { resolve(val + 1) });

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => console.log(val )); // 3 */





// --------------------callbacks------------------------------------------------

const datas = [{
  name :"akshay",
  age : 28
},
{name : "tripti",
age : 33}]

// console.log(datas)


function getdata(){
  setTimeout(()=>{
  let output = "";
   datas.forEach((data,index)=>{   
   output += `${data.name} \n`;
   })
  document.body.innerHTML= output},
  1000);
  }

  /* in this function, we are calling the datas object and showing it on the document */


function newdata(newd, callback){
  setTimeout(()=>{
    datas.push(newd)
    callback();
  },
  3000)
  }

  /* hoever, this newdata funtion appends one more data to the datas however it is now not showing on the page coz it is executing after 5 seconds. but we have getdata already been executed and display the data  */

newjoinee = ({name : "rahh", age : 88}, getdata)  /* we have passed the callback funtion coz we want to execute getdata after newdata has been executed */

newdata(newjoinee)








