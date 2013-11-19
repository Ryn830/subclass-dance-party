var PokemonDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  var itsaclass = 'pokemon';
  Dancer.call(this, top, left, timeBetweenSteps, itsaclass);
};

PokemonDancer.prototype = Object.create(Dancer.prototype);
PokemonDancer.prototype.constructer = PokemonDancer;

PokemonDancer.prototype.step = function(){
  this.oldStep();
  // this.$node.toggle();
};
