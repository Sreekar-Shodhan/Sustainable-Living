// PaperCard.js
import React from 'react';
import './Papers.css'
function PaperCard({ title, authors, publicationDate, link }) {
	return (
		<div className="paper-card">
			<h3>{title}</h3>
			<p>Authors: {authors}</p>
			<p>Publication Date: {publicationDate}</p>
			<a href={link} target="_blank" rel="noopener noreferrer">
				Read Paper
			</a>
		</div>
	);
}




const papers = [
	{
		title: 'Towards zero-waste',
		authors: 'Ludovica Principato, Carlo Alberto Pratesi',
		publicationDate: 'March 2018',
		link: 'https://www.researchgate.net/publication/324080137_Towards_Zero_Waste_an_Exploratory_Study_on_Restaurant_managers',
	},
	{
		title: 'Zero-waste Study on Restaurants',
		authors: 'Ludovica Principato, Carlo Alberto Pratesi',
		publicationDate: 'August 2018',
		link: 'https://www.sciencedirect.com/science/article/abs/pii/S0278431917306138',
	},
	{
		title: 'The Zero-waste Kitchen Design',
		authors: 'Hal Comet martinex Reales',
		publicationDate: 'March 2019',
		link: 'https://riunet.upv.es/bitstream/handle/10251/139182/Mart%C3%ADnez%20-%20Cocinas%20de%20residuo%20cero.pdf?sequence=1',
	},
	{
		title: 'Reducing Food Waste in the Kitchen',
		authors: 'Karlie Conzachi',
		publicationDate: 'Feb 2022',
		link: 'https://www.colorado.edu/ecenter/2022/02/16/reducing-food-waste-kitchen',
	},
	// Add more paper data as needed
];

function App() {
	return (
		<div className="paper-cards">
			{papers.map((paper, index) => (
				<PaperCard
					key={index}
					title={paper.title}
					authors={paper.authors}
					publicationDate={paper.publicationDate}
					link={paper.link}
				/>
			))}
		</div>
	);
}

export default App;
