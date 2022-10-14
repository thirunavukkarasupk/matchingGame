import { React } from 'react';
import './App.scss';
import Score from './components/score';
import Cards from './components/cards';

const App = (context) =>
	<div className="App" role="App">
		<Score { ...context }/>
		<Cards { ...context }/>
	</div>;

export default App;
