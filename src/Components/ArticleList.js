import React from 'react';
import './Articles.css'

// Define a reusable ArticleCard component
function ArticleCard({ title, url }) {
	return (
		<div className="article-card">
			<a href={url}>

				<h3>{title}</h3>
			</a>
		</div>
	);
}

// Create an array of article data
const articles = [
	{
		title: "How to Compost in Small Balcony",
		url: "https://www.thebetterindia.com/204617/how-to-make-compost-kitchen-waste-home-organic-garden-tips-india/",

	},
	{
		title: "How to Make Compost from Kitchen waste",
		url: "https://www.unileverfoodsolutions.com.ph/chef-inspiration/smarter-hotel-buffets/how-to-make-compost-from-kitchen-waste.html",

	},
	{
		title: "Making Compost from Kitchen waste",
		url: "https://helpmecompost.com/home-composting/implementation/how-to-make-compost-from-kitchen-waste/",

	},
	
	// Add more articles as needed
];

// Create a parent component to render the list of articles
function ArticleList() {
	return (
		<div className="article-cards">
			{articles.map((article, index) => (
				<ArticleCard
					key={index}
					title={article.title}
					url={article.url}

				/>
			))}
		</div>
	);
}

export default ArticleList;
