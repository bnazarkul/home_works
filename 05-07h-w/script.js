/*
const image = document.querySelectorAll('#img_cards img');
console.log(image)
const showInfo = (event) => {
  console.log(event.target.alt);
}

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener('click', showInfo)

}*/


/************** Стили DOM элементов ****************/


/*const  image1 = document.querySelector( '#img1');
const  image2 = document.querySelector( '#img2');
const  image3 = document.querySelector( '#img3');

const container = document.querySelector('#img_cards');

image1.addEventListener('click', () => {
  const container = document.querySelector('#img_cards');
  container.classList.add('background-red');
    }
)

image1.addEventListener('dblclick', () => {
  container.classList.remove('background-red');

})

image2.addEventListener('click', () => {
  container.classList.toggle('background-red')

})

image3.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  const result = container.classList.contains('background-red');
  console.log(result);
})*/

/************** 1  ****************/

/*
var elems = document.getElementsByTagName('div');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', setRed);
}

function setRed() {
  this.style.background = 'red';
  this.removeEventListener('click', setRed);
  this.addEventListener('click', setGreen);
}

function setGreen() {
  this.style.background = 'green';
  this.removeEventListener('click', setGreen);
  this.addEventListener('click', setRed);
}
*/

function showNotification({top = 0, right = 0, className, html}) {

  let notification = document.createElement('div');
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);
