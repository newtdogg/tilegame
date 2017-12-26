describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("startup", function() {
    it ("The game starts with a new player", function() {
      expect(game.player.gold).toEqual(5)
    });
  });

  describe("end turn", function() {
    it ("The end turn button totals up resources", function() {
      expect(game.player.gold).toEqual(5)
    });
  });
});
