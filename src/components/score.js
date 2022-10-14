import React from 'react';

const Score = (context) => {
	const { state: { score }} = context;

	return <div>Score:{score}</div>;
};

export default Score;
