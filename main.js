var startExperienteBtn = document.getElementById("start_experience");

startExperienteBtn.onclick = function() {
  document.getElementById("container").outerHTML = "";
  document.getElementsByTagName("a-scene")[0].style.zIndex = "auto";
};

var angel_1_position = [{ x: -5, y: 0.5, z: 0.5 }, { x: -5, y: 0.5, z: 0.5 }];
var angel_2_position = [];
var angel_1_in_view = true;
var angel_2_in_view = false;
AFRAME.registerComponent("listener", {
  tick: function() {
    var angel_1 = document.getElementById("angel_1");
    var angel_2 = document.getElementById("angel_2");

    var rotation = this.el.getAttribute("rotation");
    //   get head position of view
    rotation = Math.abs((rotation.y + 360) % 360);
    this.el.setAttribute("rotation.y", rotation);
    if (rotation > 60 && rotation < 290) {
      if (angel_1_in_view == true) {
        angel_1_in_view = false;
        var pos = angel_1_position.shift();
        angel_1.setAttribute("position", pos);
      }
    } else {
      angel_1_in_view = true;
    }
    if (rotation < 120 || rotation > 240) {
      if (angel_2_in_view == true) {
        angel_2_in_view = false;
        var pos = angel_1_position.shift();
        angel_2.setAttribute("position", pos);
      }
    } else {
      angel_2_in_view = true;
    }
  }
});
