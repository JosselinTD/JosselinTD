AFRAME.registerComponent('u-select', {
  init: function () {
    this.el.addEventListener('click', function (ev) {
      var position = AFRAME.utils.extend({}, this.getAttribute('position'), {y:0});
      makeEntity(AFRAME.utils.extend({}, naturePackList.Oak_Fall_01, {position:position}), scene);
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
      src: 'url(assets/util/clickable.jpg)',
      opacity: '0.2'
    },
    'u-select': {}
  }
});