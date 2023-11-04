import './style.css'
import './loadImages'
import techStack from './techStack'
import moreSkills from './moreSkills';
import { Projects } from './projects';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


techStack.Init(document.querySelector('.stack-container'));
moreSkills.Init(document.querySelector('.stack-container'));
const skills = document.querySelector('.skills-wrapper');

const skillsButton = document.querySelector('button.more-skills');
skillsButton.addEventListener('click', showSkills);

function showSkills() {
  skills.style.transform = 'scale(1, 1)';
  skills.style.maxHeight = '250px';
  skillsButton.removeEventListener('click', showSkills);
  skillsButton.textContent = 'See less';
  skillsButton.addEventListener('click', showLess);
}

function showLess() {
  skills.style.maxHeight = '0';
  skills.style.transform = 'scale(1, 0)';
  skillsButton.textContent = 'See more skills';
  skillsButton.removeEventListener('click', showLess);
  skillsButton.addEventListener('click', showSkills);
}

Projects.load();


// Three js
function init() {

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#f0e7db');
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  let dom = document.querySelector('.three-js');
  dom.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );


  //model
  let model;
  const loader = new GLTFLoader();
  loader.load('../src/keyboard.gltf', gltf => {
    model = gltf.scene;
    scene.add(gltf.scene);
  },
    function (error) {
      console.log('Error: ' + error);
    }
  )


  //light 
  const light = new THREE.AmbientLight( 0x404040, 70); // soft white light
  scene.add( light );


  camera.position.z = 0.5;

  function animate() {


    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    if (model) {
      model.rotation.x += 0.02;
      model.rotation.y += 0.02;
    }
  }
  animate();
}
init();

