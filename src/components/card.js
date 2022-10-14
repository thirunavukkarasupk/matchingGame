import React from 'react';
import cardManager from '../services/cardManager';

const Card = (context) => {
	const { data, actions } = context;

	return (
		<button
			onClick={ () => actions.openCard(data) }
		>{cardManager.flipCard(context)}
		</button>);
};

export default Card;
