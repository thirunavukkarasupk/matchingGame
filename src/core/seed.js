import { rndString } from '@laufire/utils/random';

const seed = {
	life: 2,
	score: 0,
	cards: [{
		id: rndString(),
		name: 'flower',
		image: 'x',
		isOpen: false,
		isDisabled: false,
	},
	{
		id: rndString(),
		name: 'dog',
		image: 'y',
		isOpen: false,
		isDisabled: false,
	},
	{
		id: rndString(),
		name: 'dog',
		image: 'y',
		isOpen: false,
		isDisabled: false,
	},
	{
		id: rndString(),
		name: 'flower',
		image: 'x',
		isOpen: false,
		isDisabled: false,
	}],
	time: 10,
	selectedCards: [],
};

export default seed;
