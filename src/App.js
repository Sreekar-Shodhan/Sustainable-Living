import logo from './logo.svg';
import './App.css';
import StartPage from './Components/StartPage';
import FirstPage from './Components/FirstPage';
import Videos from './Components/Videos';
import Papers from './Components/Papers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleList from './Components/ArticleList';

const router = createBrowserRouter([
	{
		path: '/', element: <StartPage />
	},
	{
		path: '/FirstPage', element: <FirstPage />
	},
	{
		path: '/Articles', element:<ArticleList/>
	},
	{
		path: '/Videos', element:<Videos/>
	},
	{
		path: '/Papers', element:<Papers/>
	}
])
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />;
		</div>
	);
}

export default App;
