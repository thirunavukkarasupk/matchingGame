const two = 2;

const cardManager = {
	openCard: ({ state: { cards }, data }) =>
		cards.map((card) => (card.id === data.id
			? { ...data, isOpen: true }
			: card)),

	selectCard: ({ state: { selectedCards }, data }) =>
		[...selectedCards, data],

	flipCard: ({ config: { backImage }, data: { isOpen, image }}) =>
		(isOpen ? image : backImage),

	isPossible: ({ state: { selectedCards }}) =>
		selectedCards.length % two === 0,

	isSame: ({ state: { selectedCards }}) => {
		const { length } = selectedCards;

		return (
			selectedCards[length - 1].name === selectedCards[length - two].name
		&& selectedCards[length - 1].id !== selectedCards[length - two].id);
	},

	addPoints: (context) => {
		const { state: { selectedCards, score },
			config: { cardScore }} = context;

		return cardManager.isSame(context)
			? score + (two
				* cardScore[selectedCards[selectedCards.length - 1].name])
			: score;
	},

	computeScore: (context) => {
		const { state: { score }} = context;

		return cardManager.isPossible(context)
			? cardManager.addPoints(context)
			: score;
	},

	computeLife: (context) => {
		const { state: { life }} = context;

		return !cardManager.isPossible(context)
			? life
			: cardManager.isSame(context)
				? life
				: life - 1;
	},

	checkCards: (context) => {
		const { state: { cards, selectedCards }} = context;

		return !cardManager.isPossible(context)
			? cards
			: cardManager.isSame(context)
				? cards.map((card) => (card.id === selectedCards[0].id
				|| card.id === selectedCards[1].id
					? { ...card, isDisabled: true }
					: card))
				: cards.map((card) => (card.id === selectedCards[0].id
					|| card.id === selectedCards[1].id
					? { ...card, isOpen: false }
					: card));
	},

	manageSelectedCards: (context) => {
		const { state: { selectedCards }} = context;

		return !cardManager.isPossible(context)
			? selectedCards
			: selectedCards.slice(0, selectedCards.length - two);
	},

	isAllDisabled: ({ state: { cards }}) =>
		cards.every((card) => card.isDisabled),

};

export default cardManager;
