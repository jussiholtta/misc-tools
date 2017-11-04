var NeuronBuilder;
NeuronBuilder = {
  
  Neuron: function() {
    this.dendrites = [0,0,0,0];
    this.axons = [0,0];
    
    return this;
  }
  
}

module.exports = NeuronBuilder;