import React from 'react';
import cardManager from '../services/cardManager';

const Card = (context) => {
	const { data, actions } = context;

	return (
		<button
			disabled={ data.disable }
			onClick={ () => {
				actions.openCard(data);
				actions.selectCard(data);
				actions.computeScore();
				actions.computeLife();
				actions.manageSelectedCards(data);
			} }
		>{cardManager.flipCard(context)}
		</button>);
};

export default Card;
