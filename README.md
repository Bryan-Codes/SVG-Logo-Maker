# SVG-Logo-Maker

SVG Logo Maker is Node.js application that accepts user input and creates svg file based on supplied arguments (text, text color, and shape color).

<!-- TOC -->
* [SVG Logo Maker](#svg-logo-maker)
    * [Features](#features)
    * [Used Technologies](#used-technologies)
    * [Set-up and Running the Project](#set-up-and-running-the-project)
<!-- TOC -->

 ## Preview
[](./examples/WalkthroughVideo.webm)

## Features

- Using `Jest` for writing tests and covering functionality
- Svgs are able to be viewed in browser
- Supports three basic shapes: `Triangle`, `Circle`, and `Square`
- Validation for color: basic web colors `or` hex (`#efefef`) values are only acceptable

## Used Technologies

| Name          | ver.        |
|---------------|-------------|
| Node.js       | `17.0.4`    |
| NPM           | `9.3.1`     |
| Jest          | `9.1.4`     |
| Inquirer      | `29.5.0`    |

## Set-up and Running the Project

1. Clone repository to your machine
2. Run `npm install` to download dependencies (make sure Node.js is installed)
3. Run `node index.js` in project root directory to open prompt menu and create your svg.
4. You can open `dist/logo.svg` in your browser 
