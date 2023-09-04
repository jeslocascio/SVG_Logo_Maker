// Define a base class "Shape" for creating shapes
class Shape {
    constructor() {
        this.color = ""; // Initialize the color property to an empty string
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    // Method to render the shape (to be overridden by child classes)
    render() {
        // Throw an error if this method is not overridden in child classes
        throw new Error("Render method must be overridden in child classes.");
    }
}

// Define a class "Circle" that extends the "Shape" class
class Circle extends Shape {
    render() {
        // Generate and return an SVG representation of a circle with the specified color
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

// Define a class "Triangle" that extends the "Shape" class
class Triangle extends Shape {
    render() {
        // Generate and return an SVG representation of a triangle with the specified color
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

// Define a class "Square" that extends the "Shape" class
class Square extends Shape {
    render() {
        // Generate and return an SVG representation of a square with the specified color
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Export the classes to make them accessible in other files
module.exports = { Shape, Circle, Triangle, Square };
