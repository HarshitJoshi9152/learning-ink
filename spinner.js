const React = require("react");
const { useEffect, useState } = require("react");

// components
const { Text } = require("ink");

const Spinner = ({ interval = 1000 }) => {
	const [frameIndex, setFrameIndex] = useState(0);
	const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const currentFrame = frames[frameIndex % (frames.length - 1)];

	useEffect(() => {
		const animation = setInterval(() => {
			setFrameIndex((fI) => fI + 1);
			// to stop interval after 5000 ms
			// setInterval(() => clearInterval(animation), 5000);
		}, interval);

		return () => clearInterval(animation);
	}, []);

	return <Text>animation : {currentFrame}</Text>;
};

module.exports = {
	Spinner,
};
