import React from 'react';
import cardManager from '../services/cardManager';

const Card = (context) => {
	const { data, actions } = context;

	return (
		<button
			disabled={ data.isDisabled }
			onClick={ () => {
				actions.openCard(data);
			} }
		>{cardManager.getCard(context)}
		</button>);
};

export default Card;
