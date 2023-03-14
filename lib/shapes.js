import { Validator } from './validate/Validator.js';

export class Shape {
	heightCanvas = 200;
	widthCanvas = 300;
	height = 150;
	width = 150;

	setColor(color) {
		if (!Validator.validateColor(color)) return;
		this.color = color;
	}

	setTextColor(textColor) {
		if (!Validator.validateColor(textColor)) return;
		this.textColor = textColor;
	}

	setText(text) {
		if (!Validator.validateText(text)) return;
		this.text = text;
	}

	render() {}
}

export class Triangle extends Shape {
	render() {
		const hPadding = (this.heightCanvas - this.height) >> 1;
		const wPadding = (this.widthCanvas - this.width) >> 1;
		return `<svg height="${this.heightCanvas}" width="${this.widthCanvas}"
         xmlns="http://www.w3.org/2000/svg">
        <polygon
         x="50%" y="50%" 
         points="
            ${(this.width >> 1) + (this.widthCanvas >> 2)},${hPadding}
            ${wPadding + this.width},${hPadding + this.height}
            ${wPadding},${hPadding + this.height}"
         fill="${this.color}" />
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle"
         font-size="3rem" fill="${this.textColor}">${this.text}</text>
        </svg>`;
	}
}

export class Circle extends Shape {
	render() {
		return `<svg height="${this.heightCanvas}" width="${this.widthCanvas}"
         xmlns="http://www.w3.org/2000/svg">
        <circle
         cx="50%" cy="50%" r="${this.height >> 1}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
         font-size="3.5rem" fill="${this.textColor}">${this.text}</text>
        </svg>`;
	}
}

export class Square extends Shape {
	render() {
		return `<svg height="${this.heightCanvas}" width="${this.widthCanvas}"
         xmlns="http://www.w3.org/2000/svg">
        <rect x="25%" y="12.5%" height="${this.height}" width="${this.width}" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
         font-size="3.5rem" fill="${this.textColor}">${this.text}</text>
        </svg>`;
	}
}
