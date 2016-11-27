AFRAME.registerComponent('u-select', {
  init: function () {
    this.el.addEventListener('click', function (ev) {
      console.log("This :", this.getAttribute('position'));
    });
  }
});

AFRAME.registerPrimitive('u-elem-selector', {
  defaultComponents: {
    geometry: {
      primitive: 'plane',
      width: 1,
      height: 1,
    },
    rotation: '-90 0 0',
    material: {
      src: 'url(assets/util/clickable.jpg)'
    },
    'u-select': {}
  }
});