const table = require("./table.json").elements;
const letters = ["K", "L", "M", "N", "O", "P", "Q"];

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

const main = () =>
	readline.question(`Please enter an element: `, ans => {
		const element = table.find(
			e =>
				e.name.toLowerCase() === ans.toLowerCase() ||
				e.symbol.toLowerCase() === ans.toLowerCase()
		);

		if (!element) return main();

		let shells = [];
		for (let i = 0; i < element.shells.length; i++) {
			shells[i] = letters[i] + element.shells[i];
		}

		console.log(`
		Element: ${element.name} [${element.symbol}]
		Group: ${element.xpos}
		Period: ${element.ypos}
		Electron Configuration: ${element.electron_configuration}
		Shells: ${shells.join(" ")}
		`);

		readline.close();
	});

main();
