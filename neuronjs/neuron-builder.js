var NeuronBuilder;
var DEFAULT_DENDRITE_COUNT = 6;
var DEFAULT_AXON_COUNT = 2;
  
NeuronBuilder = {
  Neuron: function() {
    this.newDendrite = function() {
      return "";
    }
    
    this.newAxon = function() {
      return "";
    }
    
    
    this.dendrites = new Array();
    this.axons = new Array();
    
    for(i = 0; i < DEFAULT_DENDRITE_COUNT; i++) {
      this.dendrites.push(this.newDendrite());
    }
    
    for(i = 0; i < DEFAULT_AXON_COUNT; i++) {
      this.axons.push(this.newAxon());
    }
    
    return this;
  }
  
}

module.exports = NeuronBuilder;