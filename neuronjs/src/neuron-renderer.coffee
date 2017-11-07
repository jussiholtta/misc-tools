seen = require('seen-js')
{ NeuronBuilder } = require('./neuron-builder.js');

class NeuronRenderer
  constructor: () ->

  renderNeuron: (neuron) ->
    shapes = []
    shape = new seen.Shape('soma', [new seen.Surface([
      seen.P(-1,-1,0)
      seen.P(1,-1,0)
      seen.P(1,1,0)
      seen.P(-1,1,0)
    ])])
    shapes.push(shape)

    i = 0
    for d in neuron.dendrites
      i++
      shapetmp = new seen.Shape('dendrite'+i, [new seen.Surface([
        seen.P(0,2.5,0)
        seen.P(-1.5,0.5,0)
        seen.P(1.5,0.5,0)
      ])])
      shapetmp.rotz(i)
      shapes.push(shapetmp)

    axon = new seen.Shape('axon', [new seen.Surface([
        seen.P(0.2,0.2,0)
        seen.P(-0.2,-0.2,0)
        seen.P(neuron.axonLength-0.2,-0.2,0)
        seen.P(neuron.axonLength+0.2,0.2,0)
      ])])
    shapes.push(axon)

    i=0
    for a in neuron.axonTerminals
      i++
      shapetmp = new seen.Shape('axonTerminal'+i, [new seen.Surface([
        seen.P(0,2,0)
        seen.P(-1,0.5,0)
        seen.P(1,0.5,0)
      ])])
      shapetmp.rotz(i).translate(neuron.axonLength,0)
      shapes.push(shapetmp)

    for shape in shapes
      for surf in shape.surfaces
        surf.originals = surf.points.map (p) -> p.copy()
        surf.fillMaterial = new seen.Material(seen.C.gray)
        surf.fillMaterial.color.a = 150 # Add a little transparency
      shape.scale(50)
      shape.surfaces[0].fillMaterial.color.g = 0;
    return shapes;

module.exports = NeuronRenderer;
