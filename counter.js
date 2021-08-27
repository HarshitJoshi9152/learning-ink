const React = require("react");
const { useEffect, useState } = require("react");
const propTypes = require("prop-types");

// components
const { Text, useInput } = require("ink");

const Counter = ({ start = 0 }) => {
	const [count, setCount] = useState(start);

	useInput((input, key) => {
		if (input == "j" && key.ctrl) setCount((c) => c + 10);
		else if (input == "j") setCount((c) => c + 1);
		else if (input == "k") setCount((c) => c - 1);
	});

	return <Text underlined>Counter: {count}</Text>;
};
module.exports = { Counter };
