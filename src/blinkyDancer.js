var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructer = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
