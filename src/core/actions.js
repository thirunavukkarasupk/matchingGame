import cardManager from '../services/cardManager';
import TimeManager from '../services/timeManager';

const openCard = (context) => ({
	cards: cardManager.openCard(context),
	score: cardManager.computeScore(context),
	life: cardManager.computeLife(context),
});

const restart = ({ seed }) => seed;

const manageTime = (context) => ({
	time: TimeManager.decreaseTime(context),
});

const actions = {
	openCard,
	restart,
	manageTime,
};

export default actions;
