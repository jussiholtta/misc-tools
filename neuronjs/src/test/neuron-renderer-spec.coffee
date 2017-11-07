'use strict';
expect = require('chai').expect;
NeuronRenderer = require('../neuron-renderer.coffee');
NeuronBuilder = require('../neuron-builder.js');
seen = require('seen-js');

describe 'neuron-renderer.coffee', ->
    renderer = new NeuronRenderer
    it 'should exist', ->
      expect(renderer).not.to.eql(null)
    it 'should return a shape', ->
      neuron = new NeuronBuilder.Neuron()
      expect(renderer.renderNeuron(neuron).type).to.eql('neuron')
      expect(renderer.renderNeuron(neuron).surfaces[0]).to.not.eql(undefined)
