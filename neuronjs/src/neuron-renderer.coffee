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
        seen.P(-1,-1,0)
        seen.P(1,-1,0)
        seen.P(1,1,0)
        seen.P(-1,1,0)
      ])])
      shapetmp.rotz(i)
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
