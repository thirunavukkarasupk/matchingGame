import React from 'react';
import Restart from './restart';

const FinishedScreen = (context) =>
	<div>
		matched all the cards. wanna play
		again?
		<div><Restart { ...context }/></div>
	</div>;

export default FinishedScreen;
