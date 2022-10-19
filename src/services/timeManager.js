const thousand = 1000;

const TimeManager = {
	decreaseTime: ({ state: { time }, config: { tickerDelay }}) =>
		time - (tickerDelay / thousand),

};

export default TimeManager;
