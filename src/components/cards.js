import React from 'react';
import Card from './card';

const Cards = (context) => {
	const { state: { cards }} = context;

	return cards.map((card) =>
		<span key={ card.id }>
			<Card { ...{ ...context, data: card } }/>
		</span>);
};

export default Cards;
