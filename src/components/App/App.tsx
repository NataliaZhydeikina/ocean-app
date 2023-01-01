import { useState } from "react";
import uuid from 'react-uuid';
import { ICell } from "../../interfaces/Cell.interface";
import Canvas from "../Canvas";
import Sphere from "../Sphere";
import Header from "../Header";
import "./App.css";
import Cell from "../Cell";


function App() {
	const [cells, setCells] = useState<ICell[]>([
		{
			link: "#",
			img: "1.jpg",
			meta: "December 23, 2020",
			title: "Octopus punches fish in the head (just because it can)",
			text: "Octopuses sometimes partner with fish to hunt, but the partnership comes with risks (for the fish, that is)."
		},
		{
			link: "#",
			img: "2.jpg",
			meta: "December 01, 2020",
			title: "Newfound marine blob looks like 'party balloon' with two strings, scientists say",
			text: "This is the first species NOAA scientists have ever discovered from video footage alone."
		},
		{
			link: "#",
			img: "3.jpg",
			meta: "November 26, 2020",
			title: "Swarm of eels breaks record",
			text: "Before we start mining for precious metals in the darkness of the deep sea, we might try switching on the light first and observing our surroundings."
		},
		{
			link: "#",
			img: "3.jpg",
			meta: "November 03, 2020",
			title: "Mantis shrimp punch down",
			text: "Home-stealers fought the hardest for smaller-than-ideal dens."
		},
		{
			link: "#",
			img: "1.jpg",
			meta: "October 05, 2020",
			title: "Megalodon's hugeness",
			text: "Even among its extinct relatives, Megalodon was unequalled in length and mass."
		},
		{
			link: "#",
			img: "2.jpg",
			meta: "July 27, 2020",
			title: "Adorable sunfish",
			text: "Sunfish in the Molidae family are among the biggest fish in the world."
		},
		{
			link: "#",
			img: "4.jpg",
			meta: "August 18, 2020",
			title: "Massive 'Darth Vader' sea bug",
			text: "The newly described species is one of the biggest isopods known to science."
		},
		{
			link: "#",
			img: "3.jpg",
			meta: "June 01, 2020",
			title: "Scientists capture the world's deepest octopus",
			text: "The octopus was found miles beneath the ocean surface."
		},
	]);
	return <div>
		<main>
			<div data-scroll>
				<div className="page">
					<Header />
					<div className="grid">
						{cells.map((params: ICell) => <Cell key={uuid()} {...params} />)}
					</div>
					<footer className="footer">
						<p>&copy; all news from <a href="https://www.livescience.com/topics/ocean">LiveScience</a></p>
					</footer>
				</div>
			</div>
		</main>
		<div id="container">
			<Canvas>
				<Sphere rotation={[0, 0, 0]} size={[0.3, 0.3]} />
			</Canvas>
		</div>
	</div>;
}

export default App;
