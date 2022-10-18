import cardManager from '../services/cardManager';

const openCard = (context) => ({
	cards: cardManager.openCard(context),
});

const selectCard = (context) => ({
	selectedCards: cardManager.selectCard(context),
});

const computeScore = (context) => ({
	score: cardManager.computeScore(context),
});

const computeLife = (context) => ({
	life: cardManager.computeLife(context),
});

const manageSelectedCards = (context) => ({
	selectedCards: cardManager.manageSelectedCards(context),
	cards: cardManager.checkCards(context),
});

const restart = ({ seed }) => seed;

const actions = {
	openCard,
	selectCard,
	computeScore,
	computeLife,
	manageSelectedCards,
	restart,
};

export default actions;
