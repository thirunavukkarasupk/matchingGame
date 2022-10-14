import cardManager from '../services/cardManager';

const openCard = (context) => ({
	cards: cardManager.openCard(context),
});

const actions = {
	openCard,
};

export default actions;
