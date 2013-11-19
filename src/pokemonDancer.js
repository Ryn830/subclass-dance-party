var PokemonDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  var itsaclass = 'pokemon';
  Dancer.call(this, top, left, timeBetweenSteps, itsaclass);
};

PokemonDancer.prototype = Object.create(Dancer.prototype);
PokemonDancer.prototype.constructer = PokemonDancer;

PokemonDancer.prototype.step = function(){
  this.oldStep();
  // var colors = ['DeepSkyBlue',
  //               'SpringGreen',
  //               'DarkSlateBlue',
  //               'DarkRed',
  //               'SandyBrown'];
  // var randColor = colors[Math.floor(Math.random() * 5)];
  // // console.log(randColor);
  // this.$node.css('color', randColor);
  this.$node.toggle;

  var stepwise = true;
  var that = this;
  var expand = function(){
    if (stepwise){
      that.$node.animate({
        border-radius:'150%'
      });
      stepwise = !stepwise;
    } else {
      that.$node.animate({
        border-radius:'33%'
      });
      stepwise = !stepwise;
    }
    }
  };

  expand();
};
