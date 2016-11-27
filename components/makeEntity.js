/**
* Options :
* position
* offset
* scale
* obj
* mtl
*/
function makeEntity(_datas, scene) {
  var datas = {
    position: '0 0 0',
    offset: '0 0 0',
    scale: 1
  };
  AFRAME.utils.extend(datas, _datas);

  if (!scene) {
    console.warn('No scene provided to makeEntity, return undefined');
    return;
  }

  if (typeof datas.position !== 'object') {
    datas.position = AFRAME.utils.coordinates.parse(datas.position);
  }
  if (typeof datas.offset !== 'object') {
    datas.offset = AFRAME.utils.coordinates.parse(datas.offset);
  }

  datas.position.x = datas.position.x + datas.offset.x;
  datas.position.y = datas.position.y + datas.offset.y;
  datas.position.z = datas.position.z + datas.offset.z;

  datas.scale = {
    x: datas.scale,
    y: datas.scale,
    z: datas.scale
  };

  var entity = document.createElement('a-entity');

  entity.setAttribute('position', datas.position);
  entity.setAttribute('scale', datas.scale);
  entity.setAttribute('obj-model', 'obj: ' + datas.obj + '; mtl: ' + datas.mtl);

  scene.appendChild(entity);
}