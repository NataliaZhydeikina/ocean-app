import { useState } from "react";
import uuid from 'react-uuid';
import { ICell } from "../../interfaces/Cell.interface";
import Canvas from "../Canvas";
import Sphere from "../Sphere";
import Header from "../Header";
import "./App.css";
import Cell from "../Cell";
import Footer from "../Footer";


function App() {
	const [cells, setCells] = useState<ICell[]>([
		{
			index: 1,
			link: "#",
			img: "1.jpg",
			meta: "December 23, 2022",
			title: "Знаєш, що мексиканці говорять про Тихий океан? Кажуть, що у нього немає пам'яті.",
			text: "Стівен Кінг"
		},
		{
			index: 2,
			link: "#",
			img: "2.jpg",
			meta: "December 24, 2022",
			title: "Досить недоречно називати цю планету — Земля, коли очевидно, що вона — Океан.",
			text: "Артур Кларк"
		},
		{
			index: 3,
			link: "#",
			img: "3.jpg",
			meta: "December 25, 2022",
			title: "Ти ніколи не перепливеш океан, якщо будеш боятися втратити берег з уваги.",
			text: "Христофор Колумб"
		},
		{
			index: 4,
			link: "#",
			img: "4.jpg",
			meta: "December 26, 2022",
			title: "Якщо під боком немає океану, зійде і басейн. Якщо немає басейну, включи душ. Тоді можеш кричати, вити і ридати скільки тобі влізе, і ніхто про це не дізнається, ніхто не почує. Коли-небудь цим користувався?",
			text: "Рей Бредбері"
		},
		{
			index: 5,
			link: "#",
			img: "1.jpg",
			meta: "December 27, 2022",
			title: "Любов – над бурею піднятий маяк, немеркнучий в темряві і тумані, любов – зірка, якою моряк визначає місце в океані.",
			text: "Вільям Шекспір"
		},
		{
			index: 6,
			link: "#",
			img: "2.jpg",
			meta: "December 28, 2022",
			title: "Любов! Скільки неосяжного в цьому слові! Який океан в одній сльозі! Яке небо в одному погляді! Яка буря в одному подиху! Яка блискавка в одному дотику! Яка вічність в одному моменті!",
			text: "А. Франс"
		},
		{
			index: 7,
			link: "#",
			img: "4.jpg",
			meta: "December 29, 2022",
			title: "Я не терплю стін і перегородок. Небо, що охоплює по всій землі, вітер, що не зустрічає перешкод, океан, що омиває всі берега, – ось ідеал.",
			text: "Махатма Ганді"
		},
		{
			index: 8,
			link: "#",
			img: "3.jpg",
			meta: "December 30, 2022",
			title: "Погляньте-но на океан, хіба це не жива істота? Часом гнівне, часом ніжне!",
			text: "Жюль Верн"
		},
	]);
	return <>
		<main>
			<div data-scroll>
				<div className="page">
					<Header />
					<div className="grid">
						{cells.map((params: ICell) => <Cell key={uuid()} {...params} />)}
					</div>
					<Footer />
				</div>
			</div>
		</main>
		<div id="container">
			<Canvas>
				<Sphere rotation={[0, 0, 0]} size={[0.3, 0.3]} />
			</Canvas>
		</div>
	</>;
}

export default App;
