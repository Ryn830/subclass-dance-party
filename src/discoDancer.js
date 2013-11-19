var DiscoDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  var itsaclass = 'disco';
  Dancer.call(this, top, left, timeBetweenSteps, itsaclass);
};

DiscoDancer.prototype = Object.create(Dancer.prototype);
DiscoDancer.prototype.constructer = DiscoDancer;

DiscoDancer.prototype.step = function(){
  this.oldStep();
  this.$node.animate({
    opacity: 0.25,
    left: "+=50"
  });
  this.$node.toggle();
};
