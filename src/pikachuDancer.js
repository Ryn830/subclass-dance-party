var PikachuDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  PokemonDancer.call(this, top, left, timeBetweenSteps);
};

PikachuDancer.prototype = Object.create(PokemonDancer.prototype);
PikachuDancer.prototype.constructer = PikachuDancer;

PikachuDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggleClass('lightSpeedIn');
};
