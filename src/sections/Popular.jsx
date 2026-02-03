import "./popular.css";

const food = [
	{
		img: "/mubina/1.png",
		name: "Cheese Burger",
		location: "Burger Arena",
		cash: "$3.88",
		buttonText: "Older Now",
	},
	{
		img: "/mubina/2.png",
		name: "Toffe`s Cake",
		location: "Top Sticks",
		cash: "$4.00",
		buttonText: "Older Now",
	},
	{
		img: "/mubina/3.png",
		name: "Dancake",
		location: "Cake World",
		cash: "$1.99",
		buttonText: "Older Now",
	},
	{
		img: "/mubina/4.png",
		name: "Craspy Sandwitch",
		location: "Fastfood Dane",
		cash: "$3.00",
		buttonText: "Older Now",
	},
	{
		img: "/mubina/5.png",
		name: "Thai Soup",
		location: "Foody Main",
		cash: "$2.79",
		buttonText: "Older Now",
	},
];

export default function Popular() {
	return (
		<div className="container">
			<h1 className="mubina-h1">Popular items</h1>
			<div className="cards">
				<img src="/mubina/Arrow Left.png" alt="" />
				{food.map((item) => (
					<div className="card">
						<img width={200} height={200} src={item.img} alt="" />
						<h2>{item.name}</h2>
						<h3>{item.location}</h3>
						<h3 className="hh">{item.cash}</h3>
						<button>{item.buttonText}</button>
					</div>
				))}
				<img src="/mubina/Arrow Right.png" alt="" />
			</div>
		</div>
	);
}
