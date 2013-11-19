var DiscoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

DiscoDancer.prototype = Object.create(Dancer.prototype);
DiscoDancer.prototype.constructer = DiscoDancer;
