const cardManager = {
	openedCards: ({ state: { cards }}) => cards.filter((card) =>
		card.isOpen && !card.isDisabled),

	isMatchPossible: (context) =>
		cardManager.openedCards(context).length === 1,

	firstCard: ({ data, state: { cards }}) =>
		cards.map((card) => (card.id === data.id
			? { ...data, isOpen: true }
			: card)),

	matchedCards: ({ data, state: { cards }}) =>
		cards.map((card) => (card.name === data.name
			? { ...card, isOpen: true, isDisabled: true }
			: card)),

	unmatchedCards: (context) => {
		const { data, state: { cards }} = context;
		const [cardOne] = cardManager.openedCards(context);

		return cards.map((card) =>
			(card.name === data.name || card.name === cardOne.name
				? { ...card, isOpen: false }
				: card));
	},

	openCard: (context) => {
		const { length: openedCardCount } = cardManager.openedCards(context);

		return openedCardCount < 1
			? cardManager.firstCard(context)
			: cardManager.isMatch(context)
				? cardManager.matchedCards(context)
				: cardManager.unmatchedCards(context);
	},

	getCard: ({ config: { backImage }, data: { isOpen, image }}) =>
		(isOpen ? image : backImage),

	isMatch: (context) => {
		const { data: { name }} = context;
		const [cardOne] = cardManager.openedCards(context);
		const { length: openedCardCount } = cardManager.openedCards(context);

		return openedCardCount === 1 && cardOne.name === name;
	},

	getPoints: (context) => {
		const { config: { cardScore }} = context;
		const [cardOne = { name: 'default' }]
		= cardManager.openedCards(context);

		return cardManager.isMatch(context)
			? cardScore[cardOne.name]
			: 0;
	},

	computeScore: (context) => {
		const { state: { score }} = context;

		return score + cardManager.getPoints(context);
	},

	areConditionsSatisfied: (context) =>
		(!cardManager.isMatchPossible(context)
	|| cardManager.isMatch(context)
			? 0
			: 1),

	computeLife: (context) => {
		const { state: { life }} = context;

		return life - cardManager.areConditionsSatisfied(context);
	},

	isAllDisabled: ({ state: { cards }}) =>
		cards.every((card) => card.isDisabled),

};

export default cardManager;
