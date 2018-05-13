import NeuralNetwork from '../src/NeuralNetwork';

describe('NeuralNetwork test', () => {
  test('Initialize', () => {
    const neuralNetwork = new NeuralNetwork(3, 2, 1);
    expect(neuralNetwork.inputNodeNum).toBe(3);
    expect(neuralNetwork.hiddenNodeNum).toBe(2);
    expect(neuralNetwork.outputNodeNum).toBe(1);
    expect(neuralNetwork.weightInputHidden.rows).toBe(2);
    expect(neuralNetwork.weightInputHidden.columns).toBe(3);
    expect(neuralNetwork.weightHiddenOutput.rows).toBe(1);
    expect(neuralNetwork.weightHiddenOutput.columns).toBe(2);
    expect(neuralNetwork.biasHidden.rows).toBe(2);
    expect(neuralNetwork.biasHidden.columns).toBe(1);
    expect(neuralNetwork.biasOutput.rows).toBe(1);
    expect(neuralNetwork.biasOutput.columns).toBe(1);
  });

  test('sigmoid', () => {
    expect(NeuralNetwork.sigmoid(1)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(1)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(-1)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(-1)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(-2)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(-2)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(0)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(0)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(2)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(2)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(-10000000)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(-10000000)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(10000000)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(10000000)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(1.22220)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(1.22220)).toBeGreaterThanOrEqual(0);
    expect(NeuralNetwork.sigmoid(-1.22220)).toBeLessThanOrEqual(1);
    expect(NeuralNetwork.sigmoid(-1.22220)).toBeGreaterThanOrEqual(0);
  });
});
