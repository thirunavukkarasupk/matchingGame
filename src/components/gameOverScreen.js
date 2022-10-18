import React from 'react';
import Restart from './restart';

const GameOverScreen = (context) =>

	<div>
		<div>GameOver.wanna play again?</div>
		<div><Restart { ...context }/> </div>
	</div>;

export default GameOverScreen;
