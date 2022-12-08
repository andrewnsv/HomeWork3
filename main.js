//  1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.

const name = prompt('Enter your name'); 

for(let i = 1; i <=4; i++){
    if(i === 3){
      console.log(`Happy Birthday dear ${name}.`); 
    }else{
      console.log('Happy Birthday to you.');
    }
}

    
/*  2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, где количество повторений символов '.#' 
задает пользователь через команду prompt().*/

const count = +prompt('Введите значение');
let res = '';

for (let i = 1; i <= count; i++){
    res+='.#';
    console.log(res);
}


/*  3) Напишите программу, котрая спрашивает у пользователя число и суммирует все нечетные числа, до этого числа.
Если пользователь не ввел число, вызвать команду prompt() c текстом 'Invalid. You should enter a number' 
и попросить его заново ввести число. Результат отобразите в консоли.*/

let setInt = +prompt('Enter a number');
let resInt = 0;

if(setInt < 0 || isNaN(setInt) || setInt === ''){ 
  setInt = prompt('Invalid. You should enter a number');
}

for (let i = 1; i <= setInt; i++){
    if(i%2 !== 0){
        resInt+=i;
        console.log(resInt);
    }
}


/* 4) Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.7. 
Выведите в консоль число, которое прерывает цикл и отобразите количество итераций цикла.
Loop was finished because of: <number> Number of iterations: <number> */

let i = 0;
let counter = 1;

while (true) {
  i = Math.random().toFixed(1);
  if(i > 0.7){
    console.log(`Loop was finished because of: ${i} Number of iterations: ${counter}.`);
    break;
  }
  counter++
}

/*   5) Напишите цикл от 1 до 50, в котором будет выводится поочередно числа от 1 до 50, при этом:
Если число делится на 3 без остатка, то выводить не это число, а слово 'Div by 3';
Если число делится на 5 без остатка, то выводить не это число, а слово 'Div by 5';
Если число делится и на 3 и на 5, то выводить не это число, а слово 'Div by 5 and 3';*/

for(let i = 1; i <= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('Div by 5 and 3');
    }else if(i%3 === 0){
        console.log('Div by 3');
    }else if(i%5 === 0){
        console.log('Div by 5');
    }
}

//  6) Вывтдите текущую дату и время, учитывая часовой пояс
 
const date = new Date();
console.log(date);

const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`${day}-${year}-${month} ${hours}:${minutes}:${seconds}`);