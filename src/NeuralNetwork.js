import Matrix from './Matrix';

/**
 * A neural network class with one input layer, one hidden layer, and one output layer
 */
class NeuralNetwork {
  /**
   * Sigmoid function.
   * @param {number} x is a number.
   * @return {number} return a number between 0 and 1
   */
  static sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  }
  /**
   * A neural network class's constructor
   * @param {int} inputNodeNum is the number of input layer's node.
   * @param {int} hiddenNodeNum is the number of hidden layer's node.
   * @param {int} outputNodeNum is the number of outpu layer's node.
   * @return {null} No return.
   */
  constructor(inputNodeNum, hiddenNodeNum, outputNodeNum) {
    this.inputNodeNum = inputNodeNum;
    this.hiddenNodeNum = hiddenNodeNum;
    this.outputNodeNum = outputNodeNum;
    // Save the weight matrixs
    this.weightInputHidden = new Matrix(hiddenNodeNum, inputNodeNum);
    this.weightInputHidden.randomize();
    this.weightHiddenOutput = new Matrix(outputNodeNum, hiddenNodeNum);
    this.weightHiddenOutput.randomize();

    // Save bias matrixs
    this.biasHidden = new Matrix(hiddenNodeNum, 1);
    this.biasOutput = new Matrix(outputNodeNum, 1);
    this.biasHidden.randomize();
    this.biasOutput.randomize();
  }

  /**
   * @param {object} input could be a Matrix object or a array that contains input values.
   * @return {object} Return a Matrix object.
   */
  feedforward(input) {
    const inputMatrix = input instanceof Array ? Matrix.createMatrixFromArray(input) : input;
    // Generating the hidden outputs.
    const hiddentMatrix = this.weightInputHidden
      .matrixMultiply(inputMatrix).add(this.biasHidden).applyFunction(NeuralNetwork.sigmoid);
    // console.log('Hidden input');
    // console.log(hiddentMatrix);
    // Generating the output.
    const outputMatrix = this.weightHiddenOutput
      .matrixMultiply(hiddentMatrix).add(this.biasOutput).applyFunction(NeuralNetwork.sigmoid);
    // console.log('Output');
    // console.log(outputMatrix);
    return outputMatrix;
  }

  /**
   * Traning function
   * @param {object} input could be an array or a Matrix object that contains the input values.
   * @param {object} target could be an array or a Matrix object that contains the right answers.
   * @return {null} No return.
   */
  train(input, target) {
    const output = this.feedforward(input);
    const targetMatrix = target instanceof Array ? Matrix.createMatrixFromArray(target) : target;
    const outputError = targetMatrix.subtract(output);
    const hiddenError = this.weightHiddenOutput.transpose().matrixMultiply(outputError);
  }
}

module.exports = NeuralNetwork;
