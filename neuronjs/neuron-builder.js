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
      //return this;
    };
    this.parent = neuron;
    return this;
  }
};
  
NeuronBuilder = {
  Neuron: function() {

    this.newDendrite = function() {
      return new DendriteFactory.Dendrite();
    };
    
    this.newAxonTerminal = function() {
      return new AxonFactory.Axon();
    };
    
    this.findFreeAxonTerminal = function() {
      for(i = 0; i < this.axonTerminals.length; i++) {
        var axon = this.axonTerminals[i];
        if(axon.pair === undefined)
          return axon;
        
      }
      return -1;
    };
    
    this.findFreeDendrite = function() {
      for(i = 0; i < this.dendrites.length; i++) {
        var dendrite = this.dendrites[i];
        if(dendrite.pair === undefined)
          return dendrite;
      }
      return -1;
    };
    
    this.connect = function(n2) {
      var axon = this.findFreeAxonTerminal();
      var dendrite = n2.findFreeDendrite();
      if (axon != -1 && dendrite != -1)
        return axon.buildSynapse(dendrite);
      else
        return -1;
    };
    
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