window.onload = function() {
  game = new Game
}

basetiles = function() {
  water = "water"
  $('#tileselection').html("<div class='row'>\
  <div class='col-sm-6 menuoptions' onclick='endturn(water)'>water</div>\
  <div class='col-sm-6 menuoptions' onclick='endturn('mountains')'>mountains</div>\
  </div>\
  <div class='row'>\
  <div class='col-sm-6 menuoptions' onclick='endturn('grassland')'>grassland</div>\
  <div class='col-sm-6 menuoptions' onclick='endturn('desert')'>desert</div>\
  </div>\
  ");
}

endturn = function(tiletype) {
  $('#tileselection').remove()
  $('#endturnbutton').html("<div class='row'>\
  <div class='col-sm-6'></div>\
  <div class='col-sm-6 menuoptions'>end turn</div>\
  </div>")
  console.log(tiletype)
}

function basetileoptions() {
  basetiles()
}

function endcurrentturn() {

  endturn()
}



// function
//
// function powersavermode() {
//   if (thermostat.powersavingmode === true) {
//     return "#ccff99"
//   } else {
//     return "grey"
//   }
// }
//
// usageColour = function(){
//     if (thermostat.energyUsage === "Medium Energy Usage"){
//       return "gold"
//     } else if (thermostat.energyUsage === "High Energy Usage"){
//       return "red"
//     } else {
//       return "green"
//     }
// }
//
// function reset() {
//   thermostat.resetTemp()
//   updatepage()
//   new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
// }
//
// function increase() {
//   thermostat.increaseTemp()
//   updatepage()
//   new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
// }
//
// function decrease() {
//   thermostat.decreaseTemp()
//   updatepage()
//   new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
// }
//
// function powerSave() {
//   thermostat.powerSavingSwitch()
//   updatepage()
//   new Audio("https://www.myinstants.com/media/sounds/air-horn-club-sample_1.mp3").play()
// }
