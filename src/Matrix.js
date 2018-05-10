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
  this.matrix.fill([]);
  this.matrix = this.matrix.map(() => {
    const tempArray = [];
    tempArray.length = columns;
    tempArray.fill(0);
    return tempArray;
  });
}

Matrix.prototype.multiply = function multiply(n) {
  this.matrix = this.matrix.map(element => element.map(num => num * n));
};

Matrix.prototype.add = function add(n) {
  this.matrix = this.matrix.map(element => element.map(num => num + n));
};

module.exports = Matrix;
