var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  var itsaclass = 'blinky';
  Dancer.call(this, top, left, timeBetweenSteps, itsaclass);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructer = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
