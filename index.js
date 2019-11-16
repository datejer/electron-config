const table = require("./table.json").elements;
const letters = ["K", "L", "M", "N", "O", "P", "Q"];

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

const question = () =>
	readline.question(`Please enter an element: `, ans => {
		readline.close();

		const element = table.find(
			el =>
				el.name.toLowerCase() === ans.toLowerCase() ||
				el.symbol.toLowerCase() === ans.toLowerCase()
		);

		let shells = [];
		for (let i = 0; i < element.shells.length; i++) {
			shells[i] = letters[i] + element.shells[i];
		}

		console.log(`
		Element: ${element.name} [${element.symbol}]
		Electron Configuration: ${element.electron_configuration}
		Shells: ${shells.join(" ")}
		`);
	});

question();
