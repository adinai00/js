//02.05.23
//console.log

// тип данных

// примитивный тип

// number-число
//string-строка
//bigInt-большие чис
//boolean-true,false
//null-нет ничего
//undefined-неизвестность
//symbol символ особый
//object-объект

// переменные
//variables

//var
//console.log(car)
//var.car = "javascript"

//let fisrtname = "jony"
//firstname = "anna"
//console.log(fisrtname)

//const lastname = "janybek"
//lastname = "adinai"
//console.log(lastname)

//number
//опер
//"+"
//"-"
//"*"
//"/"
//"="
//"<"
//">"
//"<="
//">="
//"=="
//"**"
//"%"

// let number = 100;
// let secondaryNum = 10;

// console.log(number + secondaryNum);
// console.log(number - secondaryNum);
// console.log(number * secondaryNum);
// console.log(number / secondaryNum);
// console.log(number > secondaryNum);
// console.log(number < secondaryNum);
// console.log(number <= secondaryNum);
// console.log(number >= secondaryNum);
// console.log(number ** secondaryNum);
// console.log(number == secondaryNum);
// console.log(number % secondaryNum);

// let num = 50;
// console.log(num);

// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b +c);

// const num = 100;
// console.log(num * 2);

//let num = 67;
// console.log(num % 7);

// let a = 10
// let b = 2
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let c = 15
// let d = 2
// result = c + d
// console.log(result);

// let a = 30
// let b = 15
// let c = a + b
// console.log(c % 4);

// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 8;
// let result = c + d;
// console.log(result);

// let a = "10";
// let b = "99";
// let result = a + b
// console.log(result);

// let name = "Askar";
// let num = 10;
// let result = name + num;
// console.log(result);

// let name = "Askar";
// let num = 10;
// let result = name - num;
// console.log(result);

//04.05.23

//String

// let a = "Hello Word";
// let b = 'Hello Word';
// let firstname = "adinai";

// let c = `Hello Word`

// let d = `Hello ${firstname}`;

// console.log(d);

// const a = "abc";
//  console.log(a.length);
//  console.log(a[0]);

// SLICE
// const firstname = "123456789";
// console.log(firstname.length);
// console.log(firstname.slice(0,firstname.length/2));

// LOVERCASE && UPPERCASSE
// const lastname = "Adinai"
// console.log(lastname.toLocaleLowerCase());
// console.log(lastname.toLocaleUpperCase());
// INCLUDES
// console.log(lastname.includes("Adi"));

// let age = "12";
// console.log(typeof +12);
// console.log(+age);

// IF ELSE
// const age = "25";
// switch(age){
//     case "25":
//     console.log("Home");
//     break;

//     case "35":
//     console.log("Home");
//     break;
// }

// const sum = 7;

// if (sum === 12 || (sum > 0 && sum < 3)) {
//   console.log("Winter");
// } else if (sum >= 3 && sum < 6) {
//   console.log("Spring");
// } else if (sum >= 6 && sum < 9) {
//   console.log("Summer");
// } else if (sum >= 9 && sum < 12) {
//   console.log("Autumn");
// } else {
//   console.log("jok");
// }

// const name = "autumn";

// switch (name) {
//     case "winter":
//     console.log("December");

//     console.log("January");

//     console.log("February");

//         break;

// }
// switch (name) {
//     case "spring":
//     console.log("March");

//     console.log("April");

//     console.log("May");

//         break;

// }
// switch (name) {
//     case "summer":
//     console.log("June");

//     console.log("July");

//     console.log("August");

//         break;

// }
// switch (name) {
//     case "autumn":
//     console.log("September");

//     console.log("October");

//     console.log("November");

//         break;

// }

// Задачи
// let fls = "фрилансер";
// let text = `Привет! Я ${fls}`;
// console.log(text);

// let text = 'фрилансер';
// console.log(text.toLocaleUpperCase());

// let text = 'фрилансер';
// console.log(text.slice(3, 6));

// let text = 'фрилансер';
// console.log(text .slice(5, 6));

// let text = 'фрилансер';
// console.log(text.includes(`лан`, 4));

// Тапшырмалар
1;
// let str = "Привет, Мир!"
// console.log(str);
2;
// let str1 = "Привет,";
// let str2 = `${str1} Мир!`;
// console.log (str2);

// let str1 = "Привет";
// let str2 = "Мир!";
// console.log(str1 + str2);
3;
// let name = "Adinai";
// console.log(`Привет, ${name}`);
4;
// let age = "18";
// console.log(`Мне ${age} лет.`);
5;
// const name1 = "365";

// const name2 = "Земля";

// const name3 = "8 млрд";

// const name4 = "Солнце";
// console.log(`В нашем году ${name1} дней. Днём у нас светит ${name4}. Население планеты ${name2} составляет примерно ${name3} человек.`);

//TYPEOF
1;
// const a = 50;
// console.log(typeof a);
2;
// let a = 10;
// let b = 35;
// let result = a + b;
// console.log(typeof String(result));
3;
// let a = 10;
// console.log(typeof a.toString());

// let b = 1012;
// console.log(typeof `${b}`);

// const age = 6;
// if(age % 2 === 0){
//     console.log('четный');
// } else {
//     console.log('не четный');
// }

// NUMBER
// alert( 9999999999999999 );
// alert(Math.random() );
// alert(Math.pow(3, 5) );

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert( a + b );
// alert( 6.35.toFixed(1));
// alert( 6.35.toFixed(20));
// alert( Math.round(6.35 * 10) /10);

// alert( 1.35.toFixed(1) );

// function readNumber() {
//     let num;

//     do {
//       num = prompt("56", 0);
//     } while ( !isFinite(num) );

//     if (num === null || num === '') return null;

//     return +num;
//   }

//   alert(`Число: ${readNumber()}`);

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }

//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );

//07.05.23

//ФУНКЦИЯ
// function declaration

// function good(name, age){
//     console.log(`My name is ${name}, age = ${age}`);
// }
// good('Adinai', 18);

// function session(num){
//     if(num === 1){
//         console.log('winter');
//     }else if(num === 2){
//         console.log('spring');
//     }
//     else if(num === 3){
//         console.log('summer');
//     }
//     else if(num === 4){
//         console.log('autumn');
//     }else{
//         console.log("башка жок");
//     }

// }
// session(5);

// function para(width, heigth){
//     // console.log((width + heigth) * 2);
//     console.log(width * heigth);
// }
// para(10, 15);

// function getsquare(a, b, c){
//     console.log(a * b * c);
// }
// getsquare(4,4,4)

//стрелочная функция-arrow function

// cb = callback () => {}

// const foo = (name) =>{
//    return `my name is ${name}`

// };
// console.log(foo('adinai'));

// function banjo(name){

//     if (name === 'R' || name === 'r') {
//         return `${name} plays banjo?`;
//     }
//     else{
//         return `${name} does not play banjo?`;
//     }
// }

// banjo('Roma');

//////////////////////////////////////////////////
// Function
// function showName() {
//     console.log('Adinai');
// }
// setTimeout(showName, 0);
//     console.log('Diana');

// function озу эле болсо бардык жерге жазыла берет
// showMessage();
// function showMessage() {
//     console.log('Hello!');

// }

// переменныйда ылдый жагына эле жазылат
// let showMessage = function () {
//     console.log('Hello!');

// }
// showMessage();

// 'use strict'
// if (2 > 1) {
//     function showMessage() {
//         console.log('Hello');
//     }
// }

// убакыт менен
// function showNumber(num){
//     console.log(num);
//     if ( num < 10) {
//         setTimeout(showNumber, 1000, ++num);

//     }
// }
// setTimeout(showNumber, 1000, 1);

// токтойт
// function showNumber(num){
//         console.log(num);
//         let timeId = setTimeout(showNumber, 1000, ++num);
//         if ( num === 10) {
//           clearTimeout(timeId);

//         }
//     }
//     setTimeout(showNumber, 1000, 1);

// функция соединения строк
// function createMessage(text, name) {
//     return`${text}, ${name}!`;
// }

// функция вывода в консоль
// function showMessage(message) {
//     console.log(message);

// }

// объединающая функция
// function initMessage(text, name) {
//     showMessage( createMessage(text, name));
// }

// initMessage('Hello', 'Adinai');
///////////////////////////////////////////////////////////////////

//DZ
1;
// let arr = [12, -45, 31, -71, 4, 7, 0]
//  console.log(arr.map(i => i > 0 ? - i : i));

// function makeNegative(num){
//     console.log(num);
//    return -num

// }

// makeNegative(2);

// 2
// function name(n, m){
//     if(n < 0 && m < 0 || m >0){
//         console.log(0);
//     }else if (n > 0 && m > 0){
//         console.log(n * m);
//     }
// }
// name(-2, 6)
3;
// function f1(w, h){
//     if ( w === h){
//         console.log(w * h);
//     } else if ( w > h || w < h){
//         console.log((w + h)* 2);
//     }
// }
// f1(3,4);

4;
// function f2(text){
//     console.log(text.toUpperCase());
// }
// f2("Hello");

5;
// function natan (time){
//     console.log();
//     return Math.floor(time / 2)
// }
// natan(1)

6;
// function bob(cap, on, wait){
//  if (on + wait === cap){
//     console.log(0);

//  }else if (on + wait < cap){
//     console.log(cap - (on + wait));

//  }else if (on + wait > cap ){
//     console.log((on + wait) - cap);
//  }
// }
// bob(35, 10, 20);

// function task(arr) {
//     return arr.split(' ').map((el) => {
//         if(el[0] === "R" || el[0] === "r"){
//             return " plays banjo"
//         }else {
//             return "does not play banj"
//         }
//     }).join("")

//  }
//  console.log(task("Roki"));

//

//  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
