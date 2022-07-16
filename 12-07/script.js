
/************** [
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
 ]

 используя этот массив, необходимо вывести на страничку карточку товаров. ****************/

/*let catalog = [
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
]

const catalogShop = (catalog) => {
    catalog.map((obj) => {
        const container = document.querySelector("#container");

        let div = document.createElement("div");
        div.className = "item";

        let img = document.createElement("img");
        img.src = `${obj.image_url}`;

        let p = document.createElement("p");
        p.className = "price";
        p.innerText = `от ${obj.price} сом`;

        container.append(div);
        div.append(img, p);
    });
};
catalogShop(catalog);*/

/*********14/07/2022 Вывод товара ********/