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

const manageCards = (context) => ({
	selectedCards: cardManager.manageSelectedCards(context),
	cards: cardManager.manageCards(context),
});

const restart = ({ seed }) => seed;

const actions = {
	openCard,
	selectCard,
	computeScore,
	computeLife,
	manageCards,
	restart,
};

export default actions;
