import React from 'react';
import Restart from './restart';

const GameOverScreen = (context) =>

	<div>
		<div>Game Over. Wanna play again?</div>
		<div><Restart { ...context }/> </div>
	</div>;

export default GameOverScreen;
