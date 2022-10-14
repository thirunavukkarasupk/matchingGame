import React from 'react';

const Life = (context) => {
	const { state: { life }} = context;

	return <div>Life:{life}</div>;
};

export default Life;
