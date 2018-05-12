/** The Matrix class */
class Matrix {
  /**
   * The constructor
   * @param {number} rows is the number of rows for the maxtrix.
   * @param {number} columns is the number of columns for the maxtrix.
   * @return {null} no return.
   */
  constructor(rows, columns) {
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

  /**
   * Calculate matrix or scaler
   * @param {object} The object contains number that is the target will be calculated, matrixFn that is a function that is used to do the matrix calculation, and scalerFn that is another function that is used to do the scaler calculation.
   * @return {object} Returnt an a matrix object.
   */
  applyCalculation({
    number, matrixFn, scalerFn
  }) {
    const isMatrix = number instanceof Matrix;
    if (isMatrix && (this.rows !== number.rows || this.columns !== number.columns))
      throw new Error('Two Matrixs need to have the same dimension.');
    const newMatrix = new Matrix(this.rows, this.columns);
    newMatrix.matrix = this.matrix.map(isMatrix ? matrixFn : scalerFn);
    return newMatrix;
  }

  /**
   * Mutiply a scaler or a matrix
   * @param {object} n could be a scaler or a matrix object.
   * @return {object} Returnt an a matrix object.
   */
  multiply(n) {
    return this.applyCalculation({
      number: n,
      matrixFn: (element, indexA) =>
        element.map((num, indexB) => num * n.matrix[indexA][indexB]),
      scalerFn: element => element.map(num => num * n)
    });
  }

  /**
   * Add a scaler or a matrix
   * @param {object} n could be a scaler or a matrix object.
   * @return {object} Returnt an a matrix object.
   */
  add(n) {
    return this.applyCalculation({
      number: n,
      matrixFn: (element, indexA) =>
        element.map((num, indexB) => num + n.matrix[indexA][indexB]),
      scalerFn: element => element.map(num => num + n)
    });
  }

  /**
   * Conduct matrix product calculation for a matrix
   * @param {object} matrix is a matrix object.
   * @return {object} Returnt an a matrix object.
   */
  matrixMultiply(matrix) {
    if (!(matrix instanceof Matrix) || this.columns !== matrix.rows) throw new Error(`Argument has to be a matrix with ${this.columns} rows.`);
    const newMatrix = new Matrix(this.rows, this.rows);
    this.matrix.forEach((matrixArow, index) => {
      matrixArow.forEach((element, rowIndex) => {
        for (let i = 0; i < this.rows; i++)
          newMatrix.matrix[index][i] += element * matrix.matrix[rowIndex][i];
      });
    });
    return newMatrix;
  }

  /**
   * Conduct a transpose operation
   * @return {object} Returnt an a matrix object.
   */
  transpose() {
    const newMatrix = new Matrix(this.columns, this.rows);
    this.matrix.forEach((rowElement, rowIndex) => {
      for (let i = 0; i < this.columns; i++) newMatrix.matrix[i][rowIndex] = rowElement[i];
    });
    return newMatrix;
  }

  /**
   * Giving the matrix random values between -1 to 1
   * @return {null} No return.
   */
  randomize() {
    this.matrix = this.matrix.map(rowElement => rowElement.map(() => (Math.random() * 2) - 1));
  }
}

module.exports = Matrix;
