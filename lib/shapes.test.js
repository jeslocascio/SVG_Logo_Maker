const { Circle, Triangle, Square } = require("./shapes");

test("Circle render method", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

test("Triangle render method", () => {
    const triangle = new Triangle();
    triangle.setColor("red");
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
});

test("Square render method", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
});
