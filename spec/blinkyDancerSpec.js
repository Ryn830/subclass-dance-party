describe("SubClass DanceParty", function () {
  var blinkyDancer;
  var discoDancer;
  var pokemonDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    discoDancer = new DiscoDancer(10, 20, timeBetweenSteps);
    pokemonDancer = new PokemonDancer(10, 20, timeBetweenSteps);
  });

  describe("blinkyDancer", function() {
    it("should have a jQuery $node object", function(){
      expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it("should have a step function that makes its node blink", function() {
      sinon.spy(blinkyDancer.$node, 'toggle');
      blinkyDancer.step();
      expect(blinkyDancer.$node.toggle.called).to.be.true;
    });

    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("discoDancer", function() {
    it("should create instances of DiscoDancer and Dancer when invoked", function(){
      expect(discoDancer).to.be.an.instanceof(Dancer);
      expect(discoDancer).to.be.an.instanceof(DiscoDancer);
    });

    it("should have a jQuery $node object", function(){
      expect(discoDancer.$node).to.be.an.instanceof(jQuery);
    });

    it("should have a step and an oldStep function", function(){
      expect('step' in discoDancer).to.be.true;
      expect('oldStep' in discoDancer).to.be.true;
    });

    it("should call step at least once per second", function(){
      sinon.spy(discoDancer, "step");
      expect(discoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(2);
    });
  });

  describe("pokemonDancer", function() {
    it("should create instances of pokemonDancer and Dancer when invoked", function(){
      expect(pokemonDancer).to.be.an.instanceof(Dancer);
      expect(pokemonDancer).to.be.an.instanceof(PokemonDancer);
    });

    it("should have a jQuery $node object", function(){
      expect(pokemonDancer.$node).to.be.an.instanceof(jQuery);
    });

    it("should have a step and an oldStep function", function(){
      expect('step' in pokemonDancer).to.be.true;
      expect('oldStep' in pokemonDancer).to.be.true;
    });

    it("should call step at least once per second", function(){
      sinon.spy(pokemonDancer, "step");
      expect(pokemonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(pokemonDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(pokemonDancer.step.callCount).to.be.equal(2);
    });
  });
});