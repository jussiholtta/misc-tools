// neuron-spec.js
'use strict';
var expect = require('chai').expect;
var NeuronBuilder = require('../neuron-builder.js');

describe('neuron-builder.js', function() {
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
    
    it('should be able to create axon terminals', function() {
      var neuron = NeuronBuilder.Neuron();
      var axonTerminal = neuron.newAxonTerminal();
      expect(axonTerminal).to.not.be.undefined;
    });
    
    it('should default to 2 axon terminals', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.axonTerminals.length).to.eql(2);
    });
    
    it('should have a soma', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.soma).to.equal(true);
    });
    
    it('should default to 5 Schwann Cell axon', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.axonLength).to.equal(5);
    });
    
    it('should default to -40 voltage', function() {
      var neuron = NeuronBuilder.Neuron();
      expect(neuron.voltage).to.equal(-40);
    });

    it('should be able to connect to a second neuron', function() {
      var neuron = new NeuronBuilder.Neuron();
      var neuron2 = new NeuronBuilder.Neuron();
      expect(neuron).to.not.eql(neuron2);
      //expect(neuron.connect(neuron2)).to.eql(neuron);
      expect(neuron.axonTerminals[0].pair).to.eql(neuron2.dendrites[0]);
      //expect(neuron2.dendrites[0].pair).to.eql(neuron2.axonTerminals[1]);
      });
         
});
