// App.js
import React from 'react';
import './Videos.css'


function VideoCard({ videoId, title }) {
	return (
		<div className="video-card">
			<iframe
				width="300"
				height="200"
				src={`https://www.youtube.com/embed/${videoId}`}
				frameBorder="0"
				allowFullScreen
				title={title}
			></iframe>
			<p>{title}</p>
		</div>
	);
}




const videos = [
	{ videoId: '0u-1yZuSCao', title: 'Compost' },
	{ videoId: 'PA-b1rQ42vU', title: 'Compost' },
	{ videoId: 'IksALpTQ1Rw', title: 'Compost' },
	{ videoId: 'yBVWgFuy7SM', title: 'Zero-Waste Kitchen' },
	{ videoId: '2MOFQUK4yZo', title: 'Zero-Waste Kitchen' },
	{ videoId: 'CE6wq6ygNXw', title: 'Zero-Waste Kitchen' },
	// Add more video data as needed
];

function App() {
	return (
		<div className="video-cards">
			{videos.map((video, index) => (
				<VideoCard key={index} videoId={video.videoId} title={video.title} />
			))}
		</div>
	);
}

export default App;
