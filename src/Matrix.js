/**
 * A matrix class.
 * @param {number} rows is the number of rows for the maxtrix.
 * @param {number} columns is the number of columns for the maxtrix.
 * @return {null} no return.
 */
function Matrix(rows, columns) {
  this.rows = rows;
  this.columns = columns;
  // Initialize a array and fill 0 in it.
  this.matrix = new Array(rows);
  this.matrix.fill(new Array(columns));
  this.matrix = this.matrix.map((element) => {
    element.fill(0);
    return element;
  });
}

Matrix.prototype.multiply = function multiply(n) {
  this.matrix = this.matrix.map(element => element.map(num => num * n));
  return this.matrix;
};

Matrix.prototype.add = function add(n) {
  this.matrix = this.matrix.map(element => element.map(num => num + n));
  return this.matrix;
};

module.exports = Matrix;
