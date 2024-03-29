import { useEffect, useRef, useState } from "react";
import uuid from 'react-uuid';
import "./App.css";
import { ICell } from "../../interfaces/Cell.interface";
import Canvas from "../Canvas";
import Image from "../Image";
import Header from "../Header";
import Cell from "../Cell";
import Footer from "../Footer";
import Scroll from "../Scroll";
import useOnLoadImages from "../../hooks/useOnLoadImages";


function App() {
	const [cells, setCells] = useState<ICell[]>([
		{
			index: 1,
			link: "#",
			img: "1.jpg",
			meta: "December 23, 2022",
			title: "Знаєш, що мексиканці говорять про Тихий океан? Кажуть, що у нього немає пам'яті.",
			text: "Стівен Кінг",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 2,
			link: "#",
			img: "2.jpg",
			meta: "December 24, 2022",
			title: "Досить недоречно називати цю планету — Земля, коли очевидно, що вона — Океан.",
			text: "Артур Кларк",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 3,
			link: "#",
			img: "3.jpg",
			meta: "December 25, 2022",
			title: "Ти ніколи не перепливеш океан, якщо будеш боятися втратити берег з уваги.",
			text: "Христофор Колумб",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 4,
			link: "#",
			img: "4.jpg",
			meta: "December 26, 2022",
			title: "Якщо під боком немає океану, зійде і басейн. Якщо немає басейну, включи душ. Тоді можеш кричати, вити і ридати скільки тобі влізе, і ніхто про це не дізнається, ніхто не почує. Коли-небудь цим користувався?",
			text: "Рей Бредбері",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 5,
			link: "#",
			img: "1.jpg",
			meta: "December 27, 2022",
			title: "Любов – над бурею піднятий маяк, немеркнучий в темряві і тумані, любов – зірка, якою моряк визначає місце в океані.",
			text: "Вільям Шекспір",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 6,
			link: "#",
			img: "2.jpg",
			meta: "December 28, 2022",
			title: "Любов! Скільки неосяжного в цьому слові! Який океан в одній сльозі! Яке небо в одному погляді! Яка буря в одному подиху! Яка блискавка в одному дотику! Яка вічність в одному моменті!",
			text: "А. Франс",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 7,
			link: "#",
			img: "4.jpg",
			meta: "December 29, 2022",
			title: "Я не терплю стін і перегородок. Небо, що охоплює по всій землі, вітер, що не зустрічає перешкод, океан, що омиває всі берега, – ось ідеал.",
			text: "Махатма Ганді",
			mouseenter: null,
			mouseout: null
		},
		{
			index: 8,
			link: "#",
			img: "3.jpg",
			meta: "December 30, 2022",
			title: "Погляньте-но на океан, хіба це не жива істота? Часом гнівне, часом ніжне!",
			text: "Жюль Верн",
			mouseenter: null,
			mouseout: null
		},
	]);
	const imageRefs = useRef<HTMLImageElement[]>(new Array(cells.length));
	const wrapperRef = useRef<HTMLDivElement>(null);
	const imagesLoaded = useOnLoadImages(wrapperRef);
	const updateCell = (i:number, val:ICell) => {
		const {mouseenter, mouseout} = cells[i];
		if(mouseenter === null || mouseout === null) {
			setCells(cells.map((el, ind)=>ind===i?val:el));
		}
	}
	return <>
	<Scroll 
	layout={
	<div className="page">
		<Header />
		<div className="grid" ref={wrapperRef}>
			{cells.map((params: ICell, i:number) => <Cell 
			key={uuid()} 
			ref={(element) => imageRefs.current[i] = element as HTMLImageElement} 
			{...params} />)}
		</div>
		<Footer />
	</div>
	}
	canvas={
		<div id="container">
			<Canvas>
				{imagesLoaded && imageRefs.current
			    .map((img: HTMLImageElement, i: number) => <Image 
				cell={cells[i]} 
				index={i} 
				updateCell={updateCell} 
				key={uuid()} 
				img={img} />)}
			</Canvas>
		</div>
	}
	/>
	</>;
}

export default App;
