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
      expect(renderer.renderNeuron(neuron)[0].type).to.eql('soma')
      expect(renderer.renderNeuron(neuron)[0].surfaces[0]).to.not.eql(undefined)
