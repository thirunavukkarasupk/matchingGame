const cardManager = {
	openCard: ({ state: { cards }, data }) =>
		cards.map((card) => (card.id === data.id
			? { ...data, isOpen: true }
			: card)),

	flipCard: ({ config: { backImage }, data: { isOpen, image }}) =>
		(isOpen ? image : backImage),

};

export default cardManager;
