/*for(let i = 5; i >= 0; i--) {
  console.log(i);
}*/

/*
1) let i = 0;
   0 < 5;
   0;
   i++;

2) let i = 1;
1 < 5;
0;
i++;

3) let i = 2;
2 < 5;
0;
i++;

4) let i = 3;
3 < 5;
0;
i++;

5) let i = 4;
4 < 5;
0;
i++;

6) let i = 5;
5 < 5;
0;
*/

/*
const countries  = ['Kyrgyzstan', 'USA', 'Japan', 'Italy'];
for(let index in countries) {
  console.log(countries[index]);
}
*/

/*const my_car = {
  name: 'Subaru',
  model: 'Impeza',
  color: 'blue'
}

for(let options in my_car) {
  console.log(my_car[options]);
}*/

/*
1) options = name;
тело;

2) options = model;
тело;

3) options = color;
тело;*/

/*
const users = ['Admin', 'Manager', 'Director'];

for(let value of users) {
  console.log(value)
}

1) value = 'Admin';
   тело;

2) value = 'Manager';
тело;

3) value = 'Director';
тело;*/

/*
const users = ['Admin', 'Manager', 'Director'];
let index = 0;
while(index < users.length) {
  console.log(users[index]);
  index++;
}*/

/*  const my_car = {
  name: 'Subaru',
  model: 'Impeza',
  color: 'blue'
}*/

/***********Создайте массив с числами. Перебирая элементы созданного массива с помощью
 цикла выведите только те элементы массива, которые больше нуля и меньше 10. **********/

for(let i = 10; i >= 0; i--) {
  console.log(i)
}

/*********** У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
 С помощью цикла надо найти сумму элементов этого массива. **********/

let arr = [1, 2, 5, 6, 88, 5];
let result = 0;
for(let elem of arr){
  result += elem;
}
console.log(result);
/*********** Создайте массив с различными числами. Должно быть как минимум 10 элементов
 внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
 Квадрат числа 5 будет 25. **********/

