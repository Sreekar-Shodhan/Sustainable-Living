import React from 'react';
import { Link } from 'react-router-dom';
import './FirstPage.css'
const FirstPage = () => {
	return <React.Fragment>


		<body>
			<header>
				<h1>Sustainable Living</h1>
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><Link to='/Articles'>Articles</Link></li>
						<li><Link to='/Videos'>Videos</Link></li>
						<li><Link to='/Papers'>Papers</Link></li>
					</ul>
				</nav>
			</header>

			<main>
				<article>
					<h2>Composting 101: Turning Kitchen Waste into Garden Gold</h2>
					<p class="meta">Published on March 15, 2023 by John Doe</p>

					<p>Composting is a simple and effective way to reduce kitchen waste and enrich your garden's soil. In this article, we'll walk you through the basics of composting and how you can get started.</p>

					<h3>What is Composting?</h3>
					<p>Composting is a natural process that turns organic matter, such as food scraps and yard waste, into nutrient-rich soil conditioner. It's a sustainable way to recycle organic materials and reduce landfill waste.</p>

					<h3>Getting Started</h3>
					<p>To start composting, you'll need the following:</p>
					<ul>
						<li>A compost bin or pile</li>
						<li>Green materials (e.g., fruit and vegetable scraps)</li>
						<li>Brown materials (e.g., leaves and cardboard)</li>
						<li>Water</li>
					</ul>



					<h3>Benefits of Composting</h3>
					<p>Composting offers several benefits:</p>
					<ul>
						<li>Reduces waste sent to landfills</li>
						<li>Enriches soil with nutrients</li>
						<li>Reduces the need for chemical fertilizers</li>
						<li>Promotes healthy plant growth</li>
					</ul>

					
				</article>
			</main>

			<footer>
				<p>&copy; 2023 Sustainable Living</p>
			</footer>
		</body>



	</React.Fragment>
}

export default FirstPage;
