/**
 * A neural network class's constructor
 * @param {int} inputNodeNum is the number of input layer's node.
 * @param {int} hiddenNodeNum is the number of hidden layer's node.
 * @param {int} outputNodeNum is the number of outpu layer's node.
 * @return {null} No return.
 */
function NeuralNetwork(inputNodeNum, hiddenNodeNum, outputNodeNum) {
  this.inputNodeNum = inputNodeNum;
  this.hiddenNodeNum = hiddenNodeNum;
  this.outputNodeNum = outputNodeNum;
}

module.exports = NeuralNetwork;
