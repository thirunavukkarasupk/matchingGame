import React from 'react';
import Score from './score';
import Cards from './cards';
import Life from './life';

const GameScreen = (context) => {
	const { state: { time }} = context;

	return (
		<div>
			Time:{time}
			<Score { ...context }/>
			<Life { ...context }/>
			<Cards { ...context }/>
		</div>
	);
};

export default GameScreen;
