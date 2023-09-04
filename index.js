const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text (up to three characters): ",
        validate: function (text) {
            if (text.length > 3) {
                console.log(" Text must be up to three characters long.");
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color (name or hex code): ",
        validate: function (textColor) {
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(textColor) || /^(red|blue|green|orange|purple|...)$/i.test(textColor)) {
                return true;
            }
            console.log("Please enter a valid color name or hex code.");
            return false;
        },
    },
    {
        type: "list",
        name: "shape",
        message: "Pick a shape for your logo: ",
        choices: [
            "Circle", "Triangle", "Square"
        ],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color (name or hex code): ",
        validate: function (shapeColor) {
            if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(shapeColor) || /^(red|blue|green|orange|purple|...)$/i.test(shapeColor)) {
                return true;
            }
            console.log("Please enter a valid color name or hex code.");
            return false;
        },
    
    }


];

const generateLogo = ({ text, textColor, shape, shapeColor }) => {
    let shapeChoice;
    switch (shape) {
        case "Circle":
            shapeChoice = new Circle();
            break;
        case "Triangle":
            shapeChoice = new Triangle();
            break;
        case "Square":
            shapeChoice = new Square();
            break;
        default:
            console.log("Invalid shape choice");
            process.exit(1);
    }

     // Check if shapeColor is a valid hex code; if not, use it as a color name
     if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(shapeColor)) {
        shapeChoice.setColor(shapeColor);
    } else {
        shapeChoice.setColor(shapeColor);
    }

    // Check if textColor is a valid hex code; if not, use it as a color name
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(textColor)) {
        textColor = textColor;
    } else {
        textColor = textColor;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeChoice.render()}
            <text x="150" y="100" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle">${text}</text>
        </svg>
    `;

    fs.writeFileSync("logo.svg", svgContent);
    console.log("Generated logo.svg");
};

const init = () => {
    inquirer
        .prompt(questions)
        // Destructure the data for text, fontColor, shape, and color
        .then(({ text, textColor, shape, shapeColor }) => {
            generateLogo({ text, textColor, shape, shapeColor });
        })
        .catch((err) => {
            console.error("Error: ", err);
        });
};

init();

