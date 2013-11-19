var DiscoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;

  this.step = function(){
    this.oldStep();
  };
};

DiscoDancer.prototype = Object.create(Dancer.prototype);
DiscoDancer.prototype.constructer = DiscoDancer;
