/*const product = [
    {
      id:1,
      name:"Iphone 13 pro max",
      image_url:"https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
      price:100250
    },
  {
    id:2,
    name:"Iphone 13 pro",
    image_url:"https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
    price:97000
  }
  ];*/

/*
const showProducts = (elements) => {
  elements.forEach( (item) => {
    const cardBox = document.createElement('div');
    cardBox.className = 'card';

    const elementName = document.createElement('h2');
    elementName.innerText = item.name;

    const elementImg = document.createElement('img');
    elementImg.src = item.image_url;

    const elementPrice = document.createElement('p');
    elementPrice.innerText = `${item.price} сом`;

    const elementButton = document.createElement('button');
    elementButton.innerText = 'Купить';

    cardBox.append(elementName, elementImg,elementPrice, elementButton);

    document.querySelector('#root').append(cardBox);
  } )
}

showProducts(product);*/

const product = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            city: "Gwenborough",
          },
          phone: "1-770-736-8031 x56442",
          company: {
            name: "Romaguera-Crona",
          },
        },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      city: "Wisokyburgh",
    },
    phone: "010-692-6593 x09125",
    company: {
      name: "Deckow-Crist",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      city: "McKenziehaven",
    },
    phone: "1-463-123-4447",
    company: {
      name: "Romaguera-Jacobson",
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      city: "South Elvis",
    },
    phone: "493-170-9623 x156",
    company: {
      name: "Robel-Corkery",
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      city: "Roscoeview",
    },
    phone: "(254)954-1289",
    company: {
      name: "Keebler LLC",
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      city: "South Christy",
    },
    phone: "1-477-935-8478 x6430",
    company: {
      name: "Considine-Lockman",
    }
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      city: "Howemouth",
      },
    phone: "210.067.6132",
    company: {
      name: "Johns Group",
    }
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      city: "Aliyaview",
    },
    phone: "586.493.6943 x140",
    company: {
      name: "Abernathy Group",
    }
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      city: "Bartholomebury",
    },
    phone: "(775)976-6794 x41206",
    company: {
      name: "Yost and Sons",
    }
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      city: "Lebsackbury",
    },
    phone: "024-648-3804",
    company: {
      name: "Hoeger LLC",
    }
  }
];

const showProducts = (elements) => {
  elements.forEach( (item) => {
    const cardBox = document.createElement('div');
    cardBox.className = 'card';

    const elementName = document.createElement('h3');
    elementName.innerText = item.name;

    const elementUsername = document.createElement('h3');
    elementUsername.innerText = item.username;

    const elementEmail = document.createElement('p');
    elementEmail.innerText = item.email;

    const elementAddress = document.createElement('div');
    elementAddress.className = 'address';

    const elementStreet = document.createElement('p');
    elementStreet.innerText = item.address.street;

    const elementCity = document.createElement('p');
    elementCity.innerText = item.address.city;

    elementAddress.append(elementStreet, elementCity);

    const elementPhone = document.createElement('p');
    elementPhone.innerText = item.phone;

    const elementCompany = document.createElement('div');
    elementCompany.className = 'Company';

    const elementCompanyName = document.createElement('p');
    elementCompanyName.innerText = item.company.name;

    elementCompany.append(elementCompanyName);

    cardBox.append(elementName, elementUsername, elementEmail, elementPhone, elementAddress, elementCompany );

    document.querySelector('#root').append(cardBox);

  } )
}

showProducts(product);


