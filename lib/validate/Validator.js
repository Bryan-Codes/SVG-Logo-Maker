import { validWebColorNames } from './validColorNames.js';

// Matches all string like '#3a3', '#F2F2F2'
const validHexColorPatter = /^#[a-f\d]{3}([a-f\d]{3})?$/i;

export class Validator {
	static validateColor(color) {
		if (!color.length) {
			console.error('\nColor is empty string');
			return false;
		}
		if (!color) {
			console.error('\nColor is not supplied');
			return false;
		}
		color = color.toLowerCase();
		if (!validWebColorNames.includes(color) && !validHexColorPatter.test(color)) {
			console.error(
				'\nSupplied color is not in valid hex (does not match the /^#[a-fd]{3}([a-fd]{3})?$/i pattern) or not valid css (web) colors list. Got color: ' +
					color
			);
			return false;
		}
		return true;
	}

	static validateText(text) {
		if (!text.length) {
			console.error('\nText is empty string');
			return false;
		}
		if (!text) {
			console.error('\nText is not supplied');
			return false;
		}
		if (text.length > 3) {
			console.error('\nMax Logo text length is: 3. Got: ' + text.length);
			return false;
		}
		return true;
	}
}
