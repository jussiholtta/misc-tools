// neuron-spec.js
'use strict';
var expect = require('chai').expect;
var NeuronBuilder = require('./neuron-builder.js');

describe('neuron.js', function() {
    it('should exist', function() {
        expect(NeuronBuilder).to.not.be.undefined;
    });
    
    it('should construct', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron).to.not.be.undefined
    });
    
    it('should have dendrites', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.dendrites).to.not.be.undefined;
    });
    
    it('should be able to create dendrites', function() {
      var neuron = NeuronBuilder.Neuron();
      var dendrite = neuron.newDendrite();
      expect(dendrite).to.not.be.undefined;
    });
    
    it('should default to 6 dendrites', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.dendrites.length).to.eql(6);
    });
    
    it('should be able to create axons', function() {
      var neuron = NeuronBuilder.Neuron();
      var axon = neuron.newAxon();
      expect(axon).to.not.be.undefined;
    });
    
    it('should default to 2 axons', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.axons.length).to.eql(2);
    });
});

