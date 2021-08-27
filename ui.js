"use strict";
const React = require("react");
const { useEffect } = require("react");
const importJsx = require("import-jsx");

// components
const { Text, useInput, Box } = require("ink");
const { Spinner } = importJsx("./spinner");

const App = ({ name = "Stranger", age = 18 }) => {
	useEffect(() => {
		// node --experimental-modules my-app.mjs
		// useInput()
	}, []);

	return (
		<>
			<Box borderStyle="single" margin={1} flexDirection="column">
				<Box borderStyle="double">
					<Text>
						Hello, <Text color="green">{name}</Text>
					</Text>
				</Box>
				<Box borderStyle="round">
					<Text>you are {age} years old</Text>
				</Box>
			</Box>
			<Spinner interval={2000}></Spinner>
		</>
	);
};

module.exports = App;
