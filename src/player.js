function Player(){
  this.gold = 5
  this.strength = 2
  this.geo = 4
  this.growth = 2
  this.goldGrowth = 1
  this.strengthGrowth = 1
  this.geoGrowth = 1
  this.growthGrowth = 1
}

Player.prototype.resourceGrowth = function() {
  this.gold += this.goldGrowth
  this.strength += this.strengthGrowth
  this.geo = this.geoGrowth
  this.growth = this.growthGrowth
}
