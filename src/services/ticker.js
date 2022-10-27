
const start = (context) => {
	const { config: { tickerDelay }, actions } = context;

	setInterval(actions.manageTime, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
