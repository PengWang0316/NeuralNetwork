import Matrix from './Matrix';

/**
 * A neural network class with one input layer, one hidden layer, and one output layer
 */
class NeuralNetwork {
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
    this.biasHidden = new Matrix(hiddenNodeNum);
    this.biasOutput = new Matrix(outputNodeNum);

  }
}

module.exports = NeuralNetwork;
