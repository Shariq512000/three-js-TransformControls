import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 30 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambient = new THREE.AmbientLight(0xffffff , 1);
scene.add(ambient);



// const texture = new THREE.TextureLoader().load("texture.jpg");
// const bumpTexture = new THREE.TextureLoader().load("texture3.jpg");
const geometry = new THREE.SphereGeometry(5 , 32, 32);

const material = new THREE.PointsMaterial({
    color: "red",
    size: 0.05,
});
const cube = new THREE.Points( geometry , material );

// const cube = new THREE.Line( geometry , material ); if you use Line you don't need wireframe


scene.add(cube);



const controls = new OrbitControls(camera , renderer.domElement);


animate();

function animate (){

    controls.update();

    // cube.rotation.x += 0.02;
    // cube.rotation.y += 0.02;
    // cube.rotation.z += 0.02;

    renderer.render(scene , camera);

    requestAnimationFrame(animate)
}
