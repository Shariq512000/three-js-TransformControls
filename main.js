import * as THREE from "three";
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls";
import {FlyControls} from "three/examples/jsm/controls/FlyControls";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0.5,0.5,0.5);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 30 ;
camera.position.y = 10 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambient = new THREE.AmbientLight(0xffffff , 1);
scene.add(ambient);


const geometry = new THREE.BoxGeometry(5, 5, 5);


const material = new THREE.MeshStandardMaterial({color:"red"});
const cube = new THREE.Mesh( geometry , material );

// const cube = new THREE.Line( geometry , material ); if you use Line you don't need wireframe


scene.add(cube);

const gridHelper = new THREE.GridHelper(100 , 10);
scene.add(gridHelper);

const clock = new THREE.Clock()


const controls = new FirstPersonControls(camera , renderer.domElement);
controls.movementSpeed = 150;
controls.lookSpeed = 0.1;

// const controls = new FlyControls(camera , renderer.domElement);
// controls.movementSpeed = 1000;
// controls.rollSpeed = Math.PI / 24;


animate();

function animate (){

    controls.update(clock.getDelta());

    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.02;
    // cube.rotation.z += 0.02;

    renderer.render(scene , camera);

    requestAnimationFrame(animate)
}
