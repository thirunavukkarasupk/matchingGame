import PlayerManager from './playerManager';

const Terminals = {
	terminals: (context) => (!PlayerManager.hasLife(context)
		? 'you lost all the life'
		: !PlayerManager.hasTime(context)
			? 'Times  Up'
			: 'you matched all the cards'),
};

export default Terminals;
