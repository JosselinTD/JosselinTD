AFRAME.registerComponent('rotable', {
  init: function () {
    this.el.addEventListener('click', function (ev) {
      var rotation = this.getAttribute('rotation');
      rotation.y+=90;
      if (rotation.y === 360) {
      	rotation.y = 0;
      }
      this.setAttribute('rotation', rotation);
    });
  }
});