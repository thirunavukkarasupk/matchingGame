const PlayerManager = {
	hasLife: ({ state: { life }}) => life > 0,

	hasTime: ({ state: { time }}) => time > 0,

};

export default PlayerManager;
