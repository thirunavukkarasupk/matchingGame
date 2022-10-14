import { React } from 'react';
import './App.scss';
import Score from './components/score';
import Cards from './components/cards';
import Life from './components/life';

const App = (context) =>
	<div className="App" role="App">
		<Score { ...context }/>
		<Life { ...context }/>
		<Cards { ...context }/>
	</div>;

export default App;
