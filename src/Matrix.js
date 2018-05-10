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
  this.matrix.fill(0);
  this.matrix = this.matrix.map((element) => {
    const arr = new Array(columns);
    arr.fill(0);
    return arr;
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

Matrix.prototype.matrixMultiply = function matrixMultiply(matrix) {
  if (!(matrix instanceof Matrix) || this.columns !== matrix.rows) throw new Error(`Argument has to be a matrix with ${this.columns} rows.`);
  const newMatrix = new Matrix(this.rows, this.rows);
  this.matrix.forEach((matrixArow, index) => {
    matrixArow.forEach((element, rowIndex) => {
      for (let i = 0; i < this.rows; i++)
        newMatrix.matrix[index][i] += element * matrix.matrix[rowIndex][i];
    });
  });
  return newMatrix;
};

module.exports = Matrix;
