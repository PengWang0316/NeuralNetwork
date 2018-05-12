import Matrix from '../src/Matrix';

describe('Test Matrix', () => {
  test('Initialize testing', () => {
    const matrix = new Matrix(3, 5);
    expect(matrix.matrix.length).toBe(3);
    expect(matrix.matrix[0].length).toBe(5);
    expect(matrix.matrix[0][0]).toBe(0);
  });

  test('multiply a scaler', () => {
    const matrix = new Matrix(3, 5);
    matrix.matrix[0][0] = 2;
    const newMatrix = matrix.multiply(2);
    expect(matrix.matrix[0][0]).toBe(4);
    expect(newMatrix[0][0]).toBe(4);
  });

  test('multiply a same dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(3, 5);
    matrixA.matrix[0][0] = 2;
    matrixB.matrix[0][0] = 3;
    const newMatrix = matrixA.multiply(matrixB);
    expect(matrixA.matrix[0][0]).toBe(6);
    expect(newMatrix[0][0]).toBe(6);
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
    expect(matrix.matrix[0][0]).toBe(8);
    expect(newMatrix[0][0]).toBe(8);
  });

  test('add a same dimension matrix', () => {
    const matrixA = new Matrix(3, 5);
    const matrixB = new Matrix(3, 5);
    matrixA.matrix[0][0] = 2;
    matrixB.matrix[0][0] = 3;
    const newMatrix = matrixA.add(matrixB);
    expect(matrixA.matrix[0][0]).toBe(5);
    expect(newMatrix[0][0]).toBe(5);
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
});
