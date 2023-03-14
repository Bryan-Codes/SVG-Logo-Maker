import { createPromptModule } from 'inquirer';
import { FileWriter } from './lib/FileWriter.js';
import { questions } from './lib/prompt/questions.js';
import { Circle, Triangle, Square } from './lib/shapes.js';

// Immediately invoked function expression
// To not use promise then()/catch() chains (ES7 syntax)
(async () => {
	// Get answers from user
	const { text, color, textColor, shape } = await createPromptModule()(questions);
	let renderer;
	// Get renderer based on user input
	switch (shape) {
		case 'circle':
			renderer = new Circle();
			break;
		case 'triangle':
			renderer = new Triangle();
			break;
		case 'square':
			renderer = new Square();
			break;
		default:
			break;
	}
	renderer.setColor(color);
	renderer.setText(text);
	renderer.setTextColor(textColor);
	FileWriter.write(renderer.render());
})();