import React from 'react';
import PlayerManager from '../services/playerManager';
import cardManager from '../services/cardManager';
import GameScreen from './gameScreen';
import GameOverScreen from './gameOverScreen';
import Time from './time';

const Game = (context) => {
	const Screen = !PlayerManager.hasTime(context)
		? GameOverScreen
		: !PlayerManager.hasLife(context) || cardManager.isAllDisabled(context)
			? GameOverScreen
			: GameScreen;

	return <div>
		<Time { ...context }/>
		<Screen { ...context }/>
	</div>;
};

export default Game;
