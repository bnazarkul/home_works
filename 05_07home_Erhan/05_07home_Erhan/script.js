/* let block = document.querySelectorAll(".color div");

let colors = ["backgroundColor1", "backgroundColor2", "backgroundColor3", "backgroundColor4"];

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', (e) => {
       block[i].classList.toggle(`${colors[i]}`)
        }
    )
}  не трогать*/


let catalog = [
	{
		id: 1,
		name: "Iphone 13 pro max",
		image_url:
			"https://istore.kg/media/products/iphone-13-pro-max-green-select.webp",
		price: 106680,
		priceFrom: "$1270,0",
		a_url: "#",
	},
	{
		id: 2,
		name: "Iphone 13 pro",
		image_url:
			"https://istore.kg/media/products/iphone-13-pro-blue-select.webp",
		price: 98280,
		priceFrom: "$1170,0",
		a_url: "#",
	},
	{
		id: 3,
		name: "Iphone 13",
		image_url:
			"https://istore.kg/media/products/iphone-13-blue-select-2021_QT6ur4J.webp",
		price: 75600,
		priceFrom: "$900,0",
		a_url: "#",
	},
	{
		id: 4,
		name: "Iphone 13 mini",
		image_url:
			"https://istore.kg/media/products/iphone-13-mini-green-select.webp",
		price: 70560,
		priceFrom: "$840,0",
		a_url: "#",
	},
	{
		id: 5,
		name: "Iphone 12 pro",
		image_url: "https://istore.kg/media/products/12-Pro-Silver_3DhtLHh.webp",
		price: 88200,
		priceFrom: "$1050,0",
		a_url: "#",
	},
	{
		id: 6,
		name: "Iphone 12",
		image_url: "https://istore.kg/media/products/12-Black.webp",
		price: 54600,
		priceFrom: "$650,0",
		a_url: "#",
	},
	{
		id: 7,
		name: "Iphone 11",
		image_url: "https://istore.kg/media/products/11-black_qdkqJZQ.webp",
		price: 48720,
		priceFrom: "$580,0",
		a_url: "#",
	},
	{
		id: 8,
		name: "Iphone SE",
		image_url: "https://istore.kg/media/products/iphone-se-midnight.webp",
		price: 42000,
		priceFrom: "$500,0",
		a_url: "#",
	},
];

const catalogShop = (catalog) => {
	catalog.map((obj) => {
		const container = document.querySelector("#container");

		let div = document.createElement("div");
		div.className = "item";

		let img = document.createElement("img");
		img.src = `${obj.image_url}`;

		let h3 = document.createElement("h3");
		h3.className = "product";
		h3.innerText = `${obj.name}`;

		let p = document.createElement("p");
		p.className = "price1";
		p.innerText = `от ${obj.price} сом`;

		let span = document.createElement("span");
		span.className = "price2";
		span.innerText = `от ${obj.priceFrom}`;

		let a = document.createElement("a");
		a.className = "link";
		a.href = `${obj.a_url}`;
		a.innerText = "Выбрать";

		container.append(div);
		div.append(img, h3, p, span, a);
	});
};
catalogShop(catalog);