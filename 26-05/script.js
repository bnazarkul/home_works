/********** По картинке **********/
/*
let question = prompt('Кто пришел?',  [100] );
if (('Отмена')) {
  alert('Вход отменен')
} else if (question === 'Админ') {
  let question = prompt('Пароль');
  if (question === 'Отмена') {
    alert('Вход отменен')
  } else if (question === 'Черный Властелин') {
    alert('Добро пожаловать!')
  } else {
    alert('Пароль неверен')
  }
} else {
  alert('Я вас не знаю')*/

const whois = prompt('Кто пришел?', 'Админ');
if (whois === 'Админ') {
  const password = prompt('Пароль');
  if (password === 'Черный властелин') {
    alert('Добро пожаловать');
} else if (password ===nul) {
  alert ('Вход отменен');
} else {
  alert('Пароль неверен');
}
} else if (whois === null) {
 alert('Вход отменен');
} else {
  alert('Я вас не знаю');
}