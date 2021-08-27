/**
 * hmmm good way to learn about Higher Level Components
 * make a base animation component which will be provided with
 * 	default interval & animation frames
 * and then extend it to make a component which also records the time passed since the animation started
 */

const React = require("react");
const { useEffect, useState } = require("react");
const propTypes = require("prop-types");

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

Spinner.propTypes = {
	interval: propTypes.number.isRequired,
};

// isRequired
// 	if prop not provided, the following is the output
// Warning: Failed prop type: The prop `interval` is marked as required in `Spinner`, but its value is `undefined`.
//
// NO VIOLATION FOR EXTRA PROPS !
module.exports = {
	Spinner,
};
