// Import necessary modules and classes
const { Shape, Circle, Triangle, Square } = require("./shapes");

// Tests the render method of the Shape class
test("Shape render method", () => {
    // Defines a callback function that attempts to call the render method of the Shape class
    const cb = () => new Shape().render();
    // Define an error to be thrown if the render method is called on the Shape class
    const error = new Error("Render method must be overridden in child classes.");
    // Expect that calling the callback function will throw the defined error
    expect(cb).toThrowError(error);
})

// Tests the render method of the Circle class
test("Circle render method", () => {
    // Create a new "Circle" instance
    const circle = new Circle();
    // Set the color of the circle to "blue"
    circle.setColor("blue");
    // Use Jest's "toEqual" matcher to verify that the rendered SVG matches the expected SVG for a blue circle
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

// Test the "render" method of the "Triangle" class
test("Triangle render method", () => {
    // Create a new "Triangle" instance
    const triangle = new Triangle();
    // Set the color of the triangle to "red"
    triangle.setColor("red");
     // Use Jest's "toEqual" matcher to verify that the rendered SVG matches the expected SVG for a red triangle
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
});

// Test the "render" method of the "Square" class
test("Square render method", () => {
    // Create a new "Square" instance
    const square = new Square();
    // Set the color of the square to "green"
    square.setColor("green");
     // Use Jest's "toEqual" matcher to verify that the rendered SVG matches the expected SVG for a green square
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
