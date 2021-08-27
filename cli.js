#!/usr/bin/env node
"use strict";
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");

const ui = importJsx("./ui");

// hmmm look into argparser or other stuff too !
// meow looks good too

const cli = meow(`
	Usage
	  $ my-ink-cli

	Options
		--name  Your name
		--age   Your age
		
	Examples
	  $ my-ink-cli --name=Jane --age=18
	  Hello, Jane
		you are 18 years old
`);

render(React.createElement(ui, cli.flags));
