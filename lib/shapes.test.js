// Jest does not support EcmaScript modules by default. Usage of es modules is required by module inquirer.
// See https://stackoverflow.com/questions/49656706/test-es6-modules-with-jest
import { Triangle, Circle, Square } from './shapes.js';

test('Sets correct color to shape', () => {
	const triangle = new Triangle();
	const expectedColor = 'blue';
	triangle.setColor(expectedColor);
	expect(triangle.render()).toEqual(`<svg height="200" width="300"
         xmlns="http://www.w3.org/2000/svg">
        <polygon
         x="50%" y="50%" 
         points="
            150,25
            225,175
            75,175"
         fill="${expectedColor}" />
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle"
         font-size="3rem" fill="undefined">undefined</text>
        </svg>`);
});

test('Sets correct text color to shape', () => {
	const triangle = new Circle();
	const expectedColor = 'blue';
	triangle.setTextColor(expectedColor);
	expect(triangle.render()).toEqual(`<svg height="200" width="300"
         xmlns="http://www.w3.org/2000/svg">
        <circle
         cx="50%" cy="50%" r="75" fill="undefined" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
         font-size="3.5rem" fill="${expectedColor}">undefined</text>
        </svg>`);
});

test('Sets correct text to shape', () => {
	const triangle = new Square();
	const expectedText = 'FOO';
	triangle.setText(expectedText);
	expect(triangle.render()).toEqual(`<svg height="200" width="300"
         xmlns="http://www.w3.org/2000/svg">
        <rect x="25%" y="12.5%" height="150" width="150" fill="undefined" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
         font-size="3.5rem" fill="undefined">${expectedText}</text>
        </svg>`);
});
