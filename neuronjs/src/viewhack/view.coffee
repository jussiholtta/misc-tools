seen = require('seen-js')
NeuronBuilder = require('./neuron-builder')
NeuronRenderer = require('./neuron-renderer')
#canvas = require('canvas')

class myView
  #for testing, REMOVE THIS
  #jsd = require('jsdom-global')();
  #document.body.innerHTML = '<canvas id=\"seen-canvas\"></canvas>'
  #for testing, REMOVE THIS
  
  width  = 900
  height = 500

  # Create sphere shape with randomly colored surfaces
  # shape = seen.Shapes.sphere(2).scale(height * 0.4)
  # seen.Colors.randomSurfaces2(shape)
  # shape2 = seen.Shapes.tetrahedron().scale(100)
  
  # this be borken
  # alert(NeuronBuilder)
  neuron = new NeuronBuilder.Neuron()
  renderer = new NeuronRenderer();
  shape = renderer.renderNeuron(neuron)
  
  console.log(shape)
  
  # Create scene and add shape to model
  scene = new seen.Scene
    model    : seen.Models.default().add(shape)
    viewport : seen.Viewports.center(width, height)

  # scene.model.add(shape2)
  # Create render context from canvas
  context = seen.Context('seen-canvas', scene).render()

  # Enable drag-to-rotate on the canvas
  dragger = new seen.Drag('seen-canvas', {inertia : true})
  dragger.on('drag.rotate', (e) ->
    xform = seen.Quaternion.xyToTransform(e.offsetRelative...)
    shape.transform(xform)
    context.render()
  )
