import React from 'react';
import PlayerManager from '../services/playerManager';
import cardManager from '../services/cardManager';
import GameScreen from './gameScreen';
import GameOverScreen from './gameOverScreen';
import FinishedScreen from './finishedScreen';

const Game = (context) => {
	const Screen = !PlayerManager.hasLife(context)
		? GameOverScreen
		: cardManager.isAllDisabled(context)
			? FinishedScreen
			: GameScreen;

	return <div>
		<Screen { ...context }/>
	</div>;
};

export default Game;
