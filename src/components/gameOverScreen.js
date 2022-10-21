import React from 'react';
import Restart from './restart';
import Terminals from '../services/terminals';

const GameOverScreen = (context) =>

	<div>
		<div>{Terminals.terminals(context)}. Wanna play again?</div>
		<div><Restart { ...context }/> </div>
	</div>;

export default GameOverScreen;
