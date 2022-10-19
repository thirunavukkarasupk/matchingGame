import cardManager from '../services/cardManager';
import TimeManager from '../services/timeManager';

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

const manageTime = (context) => ({
	time: TimeManager.decreaseTime(context),
});

const actions = {
	openCard,
	selectCard,
	computeScore,
	computeLife,
	manageCards,
	restart,
	manageTime,
};

export default actions;
