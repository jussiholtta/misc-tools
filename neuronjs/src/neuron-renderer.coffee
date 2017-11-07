seen = require('seen-js')
{ NeuronBuilder } = require('./neuron-builder.js');

class NeuronRenderer
  constructor: () ->
  
  renderNeuron: (@neuron) ->
    shape = new seen.Shape('neuron', [new seen.Surface([
      seen.P(0,1,0)
      seen.P(1,0,1)
      seen.P(2,0,2)
      seen.P(-1,0,-1)
      seen.P(-2,-1,-2)
    ])])
    shape.scale(100);
    return shape;
  
module.exports = NeuronRenderer;
