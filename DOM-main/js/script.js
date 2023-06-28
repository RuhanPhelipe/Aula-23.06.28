const listaAnimais = [
	{
		id: 1,
		titulo: "Animal 1",
		descricao:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit.",
		imgURL: "./img/section/cat-silhouette.png",
	},
	{
		id: 2,
		titulo: "Animal 2",
		descricao:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit.",
		imgURL: "./img/section/dog-silhouette.png",
	},
	{
		id: 3,
		titulo: "Animal 3",
		descricao:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit.",
		imgURL: "./img/section/cat-silhouette.png",
	},
	{
		id: 4,
		titulo: "Animal 4",
		descricao:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit.",
		imgURL: "./img/section/dog-silhouette.png",
	},
	{
		id: 5,
		titulo: "Animal 5",
		descricao:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus. Aliquam tempor nisi id lacinia lobortis. Donec in justo mauris. Mauris luctus tristique est, a faucibus elit. Vivamus et dapibus mi, id facilisis nunc. Etiam feugiat, sapien sed pharetra sagittis, risus sapien semper tortor, iaculis viverra diam augue eget odio. Nullam sit amet massa non nunc finibus rhoncus eu id elit.",
		imgURL: "./img/section/cat-silhouette.png",
	},
];

let container = document.querySelector("#animais .container");

const criacaoCards = () => {
	listaAnimais.forEach((animal) => {
		let card = `   
            <div class="card">
                <img class="card-img" src=${animal.imgURL} /> 
                <h2 class="card-titulo"> ${animal.titulo} </h2>
                <p class="card-descricao"> ${animal.descricao} </p>               
                <a class="card-botao btn btn-info" idAnimal="${animal.id}">
                  ADOTAR 
                 </a>
            </div>
        `;
		container.innerHTML += card;
	});
};

window.onload = () => {
	criacaoCards();

	let cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("mousemove", () => {
			card.style.backgroundColor = "darkblue";
			card.style.color = "white";
		});

		card.addEventListener("mouseout", () => {
			card.style.backgroundColor = "transparent";
			card.style.color = "black";
		});

		card.lastElementChild.addEventListener("click", (event) => {
			event.preventDefault();
			sessionStorage.setItem(
				"idAnimal",
				card.lastElementChild.getAttribute("idAnimal")
			);
			window.location.href = "../adotar.html";
		});
	});
};