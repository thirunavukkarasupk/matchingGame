import { React, useEffect } from 'react';
import './App.scss';
import Game from './components/game';
import Ticker from './services/ticker.js';

const App = (context) => {
	useEffect(Ticker.start, []);

	return	(
		<div className="App" role="App">
			<Game { ...context }/>
		</div>);
};

export default App;
