import React from 'react';

const Time = (context) => {
	const { state: { time }} = context;

	return (
		<div>
			Time:{time}
		</div>);
};

export default Time;
