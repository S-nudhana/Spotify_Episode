import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'

import Podcast from "./pages/Podcast";
import PodEpisode from './pages/PodcastEpisode';

const theme = createTheme({
	typography: {
		fontFamily: [
		'Noto Sans Thai',
		'sans-serif',
		].join(','),
	},
});

const router = createBrowserRouter([
	{
		path: '/show',
		element: <Podcast/>,
	},
	{
		path:'/episode',
		element: <PodEpisode/>
	},
	{
		path: '/show/:podcastShowId',
		element: <Podcast/>,
	},
	{
		path:'/episode/:podcastEpisodeId',
		element: <PodEpisode/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
)
