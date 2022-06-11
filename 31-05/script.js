/*********** Создайте объект заработных плат.
 Назовите userSalaries.
 Свойствами выступают: Ella, Sophia, Ellie
 Выведите на экран зарплату Ella, Sophia.***********/
const userSalaries = {
  Ella: 100,
  Sophia: 200,
  Ellie: 300,
};
alert(userSalaries.Ella, userSalaries.Sophia)



/*********** Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
 Найдите сумму его элементов ***********/

/*const obj = {
  a: 5,
  b: 6,
  c: 10,
}
console.log(obj['a'] + obj['b'] + obj['c'])*/


/*********** let number;
 if(data === true){
     number = 3;
  } else{
     number = 5;
  }

 Сделайте рефакторинг кода, с помощью тернарного оператора. ***********/

let number;
let data = true;
if(data === true){
  number = 3;
} else{
  number = 5;
}

alert(data);

/*result  (number === 15) ? '3' : '5';*/

