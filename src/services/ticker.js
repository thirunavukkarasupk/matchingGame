import context from '../core/context';

const start = () => {
	const { config: { tickerDelay }, actions } = context;

	setInterval(actions.manageTime, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
