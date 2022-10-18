import { React } from 'react';
import './App.scss';
import Game from './components/game';

const App = (context) =>
	<div className="App" role="App">
		<Game { ...context }/>
	</div>;

export default App;
