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
    
    it('should default to 4 dendrites', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.dendrites.length).to.eql(4);
    });
    
    
    it('should default to 2 axons', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.axons.length).to.eql(2);
    });
});

