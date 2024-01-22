// Your code here

class Polygon {
    constructor(arr) {
      this.sidesCount = arr.length;
      this.sides = arr;
    }
  
    get countSides() {
      return this.sidesCount;
    }
    get perimeter() {
      return this.sides.reduce((prev, curr) => (prev += curr), 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      return (
        this.sides.slice(1).reduce((prev, curr) => (prev += curr)) >
        this.sides.slice(0, 1)
      );
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      return this.sides.every((side) => side === this.sides[0]);
    }
    get area() {
      return this.sides[0] ** 2;
    }
  }