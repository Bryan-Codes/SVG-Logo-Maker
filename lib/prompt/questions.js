import { Validator } from '../validate/Validator.js';

export const questions = [
	{
		name: 'text',
		type: 'input',
		message: 'Please enter logo text',
		validate: Validator.validateText
	},
	{
		name: 'color',
		type: 'input',
		message: 'Please enter logo shape color',
		validate: Validator.validateColor
	},
	{
		name: 'textColor',
		type: 'input',
		message: 'Please enter logo text color',
		validate: Validator.validateColor
	},
	{
		name: 'shape',
		type: 'list',
		choices: ['circle', 'triangle', 'square'],
		message: 'Please enter logo shape'
	}
];
