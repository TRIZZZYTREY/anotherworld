var startExperienteBtn = document.getElementById("start_experience");

startExperienteBtn.onclick = function() {
  document.getElementById("container").outerHTML = "";
  document.getElementsByTagName("a-scene")[0].style.zIndex = "auto";
};

var angel_1_position = [{ x: -0.9, y: 0, z: -10.4 }, { x: -0.9, y: 0, z: -4.6 }];
var angel_2_position = [{ x: 1, y: 0, z: 2 }, { x: 1, y: 0, z: -4.3 }];
var angel_1_in_view = true;
var angel_2_in_view = false;
var time_angel_1 = 0;
var time_angel_2 = 0;
AFRAME.registerComponent("listener", {
  tick: function() {
    var angel_1 = document.getElementById("angel_1");
    var angel_2 = document.getElementById("angel_2");
    var rotation = this.el.getAttribute("rotation");
    //   get head position of view
    rotation = Math.abs((rotation.y + 360) % 360);
    this.el.setAttribute("rotation.y", rotation);
    if (rotation > 80 && rotation < 290) {
      if (angel_1_in_view == true) {
        angel_1_in_view = false;
        var pos = angel_1_position.shift();
        angel_1.setAttribute("rotation", "270 270 90");
        angel_1.setAttribute("position", pos);
        time_angel_1++;
        if (time_angel_1 == 2) {
          //   make angel bigger
          angel_1.setAttribute("scale", "0.02 0.02 0.02");
          angel_1.setAttribute("material","color: #555555; metalness:.1; roughness:1");
        }
      }
    } else {
      angel_1_in_view = true;
    }
    if (rotation < 120 || rotation > 240) {
      if (angel_2_in_view == true) {
        angel_2_in_view = false;
        var pos = angel_2_position.shift();
        angel_2.setAttribute("position", pos);
        time_angel_2++;
        if (time_angel_2 == 2) {
          angel_2.setAttribute("scale", "0.02 0.02 0.02");
          angel_2.setAttribute("material", "color: #555555; metalness:.1; roughness:1");
        }
      }
    } else {
      angel_2_in_view = true;
    }
  }
});
