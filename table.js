const React = require("react");
const { useEffect, useState } = require("react");
const propTypes = require("prop-types");
const chance = new require("chance")();
// components
const { Text, Box, Static } = require("ink");

const chanceData = new Array(10).fill(true).map((_, index) => ({
	id: index,
	// name: index,
	name: chance.name(),
	// email: index,
	email: chance.email(),
}));

// console.log({ chanceData });
// console.log(chance);
// https://blog.bitsrc.io/creating-cli-with-react-8f840791b2c2
const Table = ({ Data }) => {
	const [data, setData] = useState(Data || chanceData);

	return (
		// <Static>
		<Box borderStyle="single" flexDirection="column">
			<Box borderStyle="single">
				<Box width="10%">
					<Text>id</Text>
				</Box>
				<Box width="50%">
					<Text>name</Text>
				</Box>
				<Box width="40%">
					<Text>email</Text>
				</Box>
			</Box>

			{data.map(({ id, name, email }) => (
				<Box borderStyle="single" key={id}>
					<Box width="10%">
						<Text>{id}</Text>
					</Box>
					<Box width="50%">
						<Text>{name}</Text>
					</Box>
					<Box width="40%">
						<Text>{email}</Text>
					</Box>
				</Box>
			))}
		</Box>
		// </Static>
	);
};

Table.propTypes = {
	data: propTypes.object,
};

module.exports = { Table };
