// neuron-spec.js
'use strict';
var expect = require('chai').expect;
var NeuronRenderer = require('../neuron-renderer.js');

describe('neuron-renderer.js', function() {
    it('should exist', function() {
        expect(NeuronRenderer).to.not.be.undefined;
    });
    

    it('should return SVG', function() {
      var rendered = NeuronRenderer.renderNeuron();
      expect(rendered).to.eql('a');
    });
});