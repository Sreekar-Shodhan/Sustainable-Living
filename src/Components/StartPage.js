import React from 'react'
import './StartPage.css'
import { Link } from 'react-router-dom';

const StartPage = () => {
	return <React.Fragment>

						<body class="bg-gray-100">

							<header class="bg-green-500 py-8 text-white text-center">
								<h1 class="text-4xl font-semibold">Embrace Sustainable Living</h1>
								<p class="text-lg mt-4">Discover eco-friendly ways to live a sustainable life.</p>
							</header>


							<section class="py-12">
								<div class="container mx-auto px-4">
									<div class="flex flex-col md:flex-row">
										<div class="md:w-1/2 md:pr-8">
											<h2 class="text-3xl font-semibold mb-4">Why Choose Sustainable Living?</h2>
											<p class="text-gray-700 leading-relaxed">
												Sustainable living helps protect the environment, conserves resources, and creates a healthier future for all. Learn how to make eco-conscious choices in your everyday life. It all starts from our kitchen. Use kitchen waste to make compost and also by following zero-waste kitchen living.
											</p>
										</div>

									</div>
								</div>
							</section>


							<section class="bg-green-500 py-12 text-white">
								<div class="container mx-auto px-4">
									<h2 class="text-3xl font-semibold text-center mb-6">Sustainable Living Tips</h2>
									<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

										<div class="bg-white rounded-lg p-6 shadow-lg">
											<h3 class="text-xl font-semibold mb-2">Reduce, Reuse, Recycle</h3>
							<p class="text-gray-700">A zero-waste kitchen is a sustainable haven where every effort is made to minimize waste and environmental impact. It prioritizes practices such as composting, recycling, using reusable containers, and reducing single-use plastics to create a more eco-friendly and environmentally conscious cooking space.</p>
										</div>

										<div class="bg-white rounded-lg p-6 shadow-lg">
											<h3 class="text-xl font-semibold mb-2">Conserve Energy</h3>
							<p class="text-gray-700">By embracing sustainable living in the kitchen and beyond, we not only reduce waste but also promote a healthier planet and a more responsible way of life.It's a lifestyle that extends beyond the cooking space, influencing our choices in all aspects of daily life to protect our planet for future generations.</p>
										</div>

										<div class="bg-white rounded-lg p-6 shadow-lg">
											<h3 class="text-xl font-semibold mb-2">Support Local and Sustainable Products</h3>
							<p class="text-gray-700">Sustainable living involves making conscious choices to minimize our environmental impact, from reducing waste and conserving energy to supporting eco-friendly practices and products, all in an effort to create a more harmonious relationship with the planet.</p>
										</div>
									</div>
								</div>
							</section>


							<section class="bg-green-600 py-12 text-white text-center">
								<div class="container mx-auto px-4">
									<h2 class="text-3xl font-semibold mb-4">Join Us in Making a Difference</h2>
									<p class="text-lg mb-8">Together, we can create a sustainable future for our planet.</p>
					<Link to='FirstPage' class="bg-yellow-500 hover:bg-yellow-400 text-gray-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">Get Started</Link>
								</div>
							</section>


							<footer class="bg-gray-900 py-8 text-white text-center">
								<div class="container mx-auto">
									<p>&copy; 2023 Sustainable Living</p>
								</div>
							</footer>
						</body>


	</React.Fragment>
}

export default StartPage;
