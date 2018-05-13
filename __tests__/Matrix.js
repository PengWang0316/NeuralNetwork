import Matrix from '../src/Matrix';

describe('Test Matrix', () => {
  test('Initialize testing', () => {
    const matrix = new Matrix(3, 5);
    expect(matrix.matrix.length).toBe(3);
    expect(matrix.matrix[0].length).toBe(5);
    expect(matrix.matrix[0][0]).toBe(0);
  });

  test('createMatrixFromArray', () => {
    const array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    const matrix = Matrix.createMatrixFromArray(array);

    expect(matrix.rows).toBe(3);
    expect(matrix.columns).toBe(4);
    expect(matrix.matrix).toEqual(array);
    expect(matrix.matrix).not.toBe(array);
  });

  test('multiply a scaler', () => {
    const matrix = new Matrix(3, 5);
    matrix.matrix[0][0] = 2;
    const newMatrix = matrix.multiply(2);
    expect(matrix.matrix[0][0]).toBe(2);
    expect(newMatrix.matrix[0][0]).toBe(4);
  });

  test('multiply a same dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(3, 5);
    matrixA.matrix[0][0] = 2;
    matrixB.matrix[0][0] = 3;
    const newMatrix = matrixA.multiply(matrixB);
    expect(matrixA.matrix[0][0]).toBe(2);
    expect(newMatrix.matrix[0][0]).toBe(6);
  });

  test('multiply a differnet dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(3, 3);
    expect(() => matrixA.multiply(matrixB)).toThrow(new Error('Two Matrixs need to have the same dimension.'));
  });

  test('add a scaler', () => {
    const matrix = new Matrix(3, 5);
    matrix.matrix[0][0] = 3;
    const newMatrix = matrix.add(5);
    expect(matrix.matrix[0][0]).toBe(3);
    expect(newMatrix.matrix[0][0]).toBe(8);
  });

  test('add a same dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(3, 5);
    matrixA.matrix[0][0] = 2;
    matrixB.matrix[0][0] = 3;
    const newMatrix = matrixA.add(matrixB);
    expect(matrixA.matrix[0][0]).toBe(2);
    expect(newMatrix.matrix[0][0]).toBe(5);
  });

  test('add a differnet dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(4, 5);
    expect(() => matrixA.add(matrixB)).toThrow(new Error('Two Matrixs need to have the same dimension.'));
  });

  test('matrixMultiply', () => {
    const matrixA = new Matrix(2, 3);
    const matrixB = new Matrix(3, 2);
    matrixA.matrix[0][0] = 1;
    matrixB.matrix[0][0] = 1;
    matrixA.matrix[0][1] = 2;
    matrixB.matrix[0][1] = 2;
    matrixA.matrix[0][2] = 3;
    matrixA.matrix[1][0] = 4;
    matrixB.matrix[1][0] = 3;
    matrixA.matrix[1][1] = 5;
    matrixB.matrix[1][1] = 4;
    matrixA.matrix[1][2] = 6;
    matrixB.matrix[2][0] = 5;
    matrixB.matrix[2][1] = 6;

    const expectArray = [[22, 28], [49, 64]];

    expect(matrixA.matrixMultiply(matrixB).matrix).toEqual(expectArray);
  });

  test('matrixMultiply with different dimensions', () => {
    const matrixA = new Matrix(2, 3);
    const matrixB = new Matrix(4, 2);
    expect(() => matrixA.matrixMultiply(matrixB)).toThrow(new Error(`Argument has to be a matrix with ${matrixA.columns} rows.`));
    expect(() => matrixA.matrixMultiply(1)).toThrow(new Error(`Argument has to be a matrix with ${matrixA.columns} rows.`));
  });

  test('transpose', () => {
    const matrixA = new Matrix(2, 3);
    matrixA.matrix[0][0] = 1;
    matrixA.matrix[0][1] = 2;
    matrixA.matrix[0][2] = 3;
    matrixA.matrix[1][0] = 4;
    matrixA.matrix[1][1] = 5;
    matrixA.matrix[1][2] = 6;

    const expectArray = [[1, 4], [2, 5], [3, 6]];

    expect(matrixA.transpose().matrix).toEqual(expectArray);
  });

  test('randomize', () => {
    const matrixA = new Matrix(2, 3);
    const matrixB = new Matrix(2, 3);
    matrixA.randomize();
    matrixB.randomize();

    expect(matrixA.matrix).not.toEqual(matrixB.matrix);
  });

  test('applyFunction', () => {
    const matrixA = new Matrix(2, 3);
    matrixA.matrix[0][0] = 1;
    matrixA.matrix[0][1] = 2;
    matrixA.matrix[0][2] = 3;
    matrixA.matrix[1][0] = 4;
    matrixA.matrix[1][1] = 5;
    matrixA.matrix[1][2] = 6;

    const expectArray = [[2, 3, 4], [5, 6, 7]];
    expect(matrixA.applyFunction(val => val + 1).matrix).toEqual(expectArray);
  });
});
