seen = require('seen-js')
{ NeuronBuilder } = require('./neuron-builder.js');

class NeuronRenderer
  constructor: () ->
  
  renderNeuron: (@neuron) ->
    shape = new seen.Shape('neuron', [new seen.Surface([
      seen.P(0,0,0)
      seen.P(0,1,0)
      seen.P(1,0,0)
    ])])
    shape = seen.Shapes.tetrahedron().scale(200);
    shape.type = 'neuron';
    return shape;
  
module.exports = NeuronRenderer;
