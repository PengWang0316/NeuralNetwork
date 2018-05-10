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

Matrix.prototype.applyCalculation = function applyCalculation({
  number, matrixFn, scalerFn
}) {
  const isMatrix = number instanceof Matrix;
  if (isMatrix && (this.rows !== number.rows || this.columns !== number.columns))
    throw new Error('Two Matrixs need to have the same dimension.');
  this.matrix = this.matrix.map(isMatrix ? matrixFn : scalerFn);
  return this.matrix;
};

Matrix.prototype.multiply = function multiply(n) {
  return this.applyCalculation({
    number: n,
    matrixFn: (element, indexA) =>
      element.map((num, indexB) => num * n.matrix[indexA][indexB]),
    scalerFn: element => element.map(num => num * n)
  });
};

Matrix.prototype.add = function add(n) {
  return this.applyCalculation({
    number: n,
    matrixFn: (element, indexA) =>
      element.map((num, indexB) => num + n.matrix[indexA][indexB]),
    scalerFn: element => element.map(num => num + n)
  });
};

module.exports = Matrix;
