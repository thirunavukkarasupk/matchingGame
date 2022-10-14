import { rndString } from '@laufire/utils/random';

const seed = {
	life: 1,
	score: 0,
	cards: [{
		id: rndString(),
		name: 'flower',
		image: 'x',
		isOpen: false,
		disable: false,
	},
	{
		id: rndString(),
		name: 'dog',
		image: 'y',
		isOpen: false,
		disable: false,
	},
	{
		id: rndString(),
		name: 'dog',
		image: 'y',
		isOpen: false,
		disable: false,
	},
	{
		id: rndString(),
		name: 'flower',
		image: 'x',
		isOpen: false,
		disable: false,
	}],
	time: 10,
};

export default seed;
