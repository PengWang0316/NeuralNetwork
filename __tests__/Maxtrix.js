import Matrix from '../src/Matrix';

describe('Test Matrix', () => {
  test('Initialize testing', () => {
    const matrix = new Matrix(3, 5);
    expect(matrix.matrix.length).toBe(3);
    expect(matrix.matrix[0].length).toBe(5);
    expect(matrix.matrix[0][0]).toBe(0);
  });

  test('multiply', () => {
    const matrix = new Matrix(3, 5);
    matrix.matrix[0][0] = 2;
    matrix.multiply(2);
    expect(matrix.matrix[0][0]).toBe(4);
  });

  test('add', () => {
    const matrix = new Matrix(3, 5);
    matrix.matrix[0][0] = 3;
    matrix.add(5);
    expect(matrix.matrix[0][0]).toBe(8);
  });
});
