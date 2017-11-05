var NeuronBuilder;
var DendriteFactory;
var DEFAULT_DENDRITE_COUNT = 6;
var DEFAULT_AXON_TERMINAL_COUNT = 2;

DendriteFactory = {
  Dendrite: function(neuron) {
    this.parent = neuron;
    return this;
  }
};

AxonFactory = {
  Axon: function(neuron) {
    this.buildSynapse = function(dendrite) {
      this.pair = dendrite;
      dendrite.pair = this;
      return this;
    };
    
    this.parent = neuron;
    return this;
  }
};
  
NeuronBuilder = {
  Neuron: function() {

    this.newDendrite = function() {
      return new DendriteFactory.Dendrite();
    }
    this.newAxonTerminal = function() {
      return new AxonFactory.Axon();
    };
    
    this.connect = function(n2) {
      var axon = this.axonTerminals[0]
      return axon.buildSynapse(n2.dendrites[0]);
    }
    
    this.soma = true;
    this.dendrites = [];
    this.axonLength = 5;
    this.axonTerminals = [];
    this.voltage = -40;
    
    for(i = 0; i < DEFAULT_DENDRITE_COUNT; i++) {
      this.dendrites.push(this.newDendrite());
    }
    
    for(i = 0; i < DEFAULT_AXON_TERMINAL_COUNT; i++) {
     this.axonTerminals.push(this.newAxonTerminal());
    }
    
    return this;
  }
  
};

module.exports = NeuronBuilder;