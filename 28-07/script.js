/*const  form = document.querySelector('#form');

const createErrorElem = () => {
  const elem = document.createElement('p');
/!*  const elem = document.querySelector('#text');*!/
  elem.className = "text-error";
  elem.innerText = "Обязательное поле";
  return elem;
}

const checkElem = (event) => {
  if(event.target.value !== "") {
    event.target.classList.remove('empty-field');
    event.target.nextElementSibling.remove();
  }


}

const removeErrorElem = () => {
  const elems = document.querySelectorAll ('.text-error');
  if(elems.length > 0) {
    for(let i = 0; i < elems.length; i++) {
      elems[i].remove();
    }
  }
}



form.addEventListener('submit', () => {
  const elements = document.querySelectorAll('#form input, #form select, #form textarea');
  removeErrorElem();
  for(let i = 0; i < elements.length; i++){
    if(elements[i].hasAttribute('data-required')) {
      if (elements[i].value === '') {
        elements[i].classList.add('empty-field');
        elements[i].after(createErrorElem());
        elements[i].addEventListener('input', checkElem);

      }
    }
  }


})*/


const  form = document.querySelector('#form');
form.addEventListener('submit', () => {
  const elements = document.querySelectorAll('#form input, #form select, #form textarea');
  removeErrorElem();
  for(let i = 0; i < elements.length; i++){
    if(elements[i].hasAttribute('data-required')) {
      if (elements[i].value === '') {
        elements[i].classList.add('empty-field');
        const elem = document.createElement('p');
        elem.className = "text-error";
        elem.innerText = "Обязательное поле";
        elements[i].after(elem);
        elements[i].addEventListener('input', checkElem);



      }
    }
  }


})

const removeErrorElem = () => {
  const elems = document.querySelectorAll ('.text-error');
  if(elems.length > 0) {
    for(let i = 0; i < elems.length; i++) {
      elems[i].remove();
    }
  }
}

const checkElem = (event) => {
  if(event.target.value !== "") {
    event.target.classList.remove('empty-field');
    event.target.nextElementSibling.remove();
  }


}

