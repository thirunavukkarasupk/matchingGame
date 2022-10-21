import React from 'react';
import PlayerManager from '../services/playerManager';
import cardManager from '../services/cardManager';
import GameScreen from './gameScreen';
import GameOverScreen from './gameOverScreen';

const Game = (context) => {
	const Screen = !PlayerManager.hasTime(context)
	|| !PlayerManager.hasLife(context) || cardManager.isAllDisabled(context)
		? GameOverScreen
		: GameScreen;

	return (
		<div>
			<Screen { ...context }/>
		</div>
	);
};

export default Game;
