import React from 'react';

const Restart = ({ actions }) =>
	<button
		onClick={ () => actions.restart() }
	>Restart
	</button>;

export default Restart;
