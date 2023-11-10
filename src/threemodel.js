import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelImport from './keyboard.gltf';

export let threemodel = (() => {

  const scene = new THREE.Scene();
// Three js
function init(color) {

  scene.background = new THREE.Color(color);
  const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth/2, window.innerHeight/2);
  let dom = document.querySelector('.three-js');
  dom.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );


  //model
  let model;
  const loader = new GLTFLoader();
  loader.load(modelImport, gltf => {
    model = gltf.scene;
    scene.add(gltf.scene);
  },
    function (error) {
      console.log('Error: ' + error);
    }
  )

  //Controls
  const controls = new OrbitControls( camera, renderer.domElement );

  //light 
  const light = new THREE.AmbientLight( 0x404040, 180); // soft white light
  scene.add( light );

  
  controls.autoRotate = true;
  // controls.autoRotateSpeed = 8;
  controls.enablePan = false;
  camera.position.z = 0.5;


  function animate() {


    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    if (model) {
      model.rotation.x += 0.01;
      // model.rotation.y += 0.01;
    }
  }
  animate();
  }

  function changeColor(color){
    scene.background = new THREE.Color(color);
  }

  return {init, changeColor}
})();