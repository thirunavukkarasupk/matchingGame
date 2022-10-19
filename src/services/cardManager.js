import { rndString } from '@laufire/utils/random';

const two = 2;

const cardManager = {
	openCard: ({ state: { cards }, data }) =>
		cards.map((card) => (card.id === data.id
			? { ...data, isOpen: true, isDisabled: true }
			: card)),

	selectCard: ({ state: { selectedCards }, data }) =>
		[...selectedCards, data],

	getCard: ({ config: { backImage }, data: { isOpen, image }}) =>
		(isOpen ? image : backImage),

	isMatchPossible: ({ state: { selectedCards }}) =>
		selectedCards.length % two === 0,

	isMatch: ({ state: { selectedCards }}) => {
		const [cardOne,
			cardTwo = { name: 'default', id: rndString() }] = selectedCards;

		return cardOne.name === cardTwo.name;
	},

	getPoints: (context) => {
		const { state: { selectedCards }, config: { cardScore }} = context;
		const [{ name: cardName }] = selectedCards;

		return cardManager.isMatch(context)
			? cardScore[cardName]
			: 0;
	},

	computeScore: (context) => {
		const { state: { score }} = context;

		return score + cardManager.getPoints(context);
	},

	computeLife: (context) => {
		const { state: { life }} = context;

		return !cardManager.isPossible(context)
			? life
			: cardManager.isMatch(context)
				? life
				: life - 1;
	},

	manageCards: (context) => {
		const { state: { cards, selectedCards }} = context;
		const [cardOne,
			cardTwo = { id: rndString(), name: 'default' }] = selectedCards;

		return !cardManager.isMatchPossible(context)
			? cards
			: cardManager.isMatch(context)
				? cards
				: cards.map((card) => (card.id === cardOne.id
					|| card.id === cardTwo.id
					? { ...card, isOpen: false, isDisabled: false }
					: card));
	},

	manageSelectedCards: (context) => {
		const { state: { selectedCards }} = context;

		return cardManager.isMatchPossible(context)
			? []
			: selectedCards;
	},

	isAllDisabled: ({ state: { cards }}) =>
		cards.every((card) => card.isDisabled),

};

export default cardManager;
