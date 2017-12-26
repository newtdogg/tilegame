describe("Player", function() {
  var player;

  beforeEach(function(){
    player = new Player();
  });

  describe("Player starting resources", function() {
    it ("The game starts with 5 gold", function() {
      expect(player.gold).toEqual(5)
    });
    it ("The game starts with 2 strength", function() {
      expect(player.strength).toEqual(2)
    });
    it ("The game starts with 4 geo", function() {
      expect(player.geo).toEqual(4)
    });
    it ("The game starts with 2 growth", function() {
      expect(player.growth).toEqual(2)
    });
    it ("The starting tile provides 1 growth to all resources", function() {
      expect(player.goldGrowth).toEqual(1)
      expect(player.strengthGrowth).toEqual(1)
      expect(player.geoGrowth).toEqual(1)
      expect(player.growthGrowth).toEqual(1)
    });
  });
  describe("Ending turn", function() {
    it ("Resources are added the end of turn", function() {
      player.resourceGrowth()
      expect(player.gold).toEqual(6)
    });
  });

});
