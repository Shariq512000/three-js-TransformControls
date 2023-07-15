import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0.5,0.5,0.5);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 30 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambient = new THREE.AmbientLight(0xffffff , 1);
scene.add(ambient);



// const texture = new THREE.TextureLoader().load("texture.jpg");
// const bumpTexture = new THREE.TextureLoader().load("texture3.jpg");
const geometry = new THREE.BufferGeometry()
const vertices = new Float32Array(
    [
        -1.0, -1.0, 1.0,
        1.0, -1.0, 1.0,
        1.0, 1.0, 1.0,
        -1.0, 1.0, 1.0,
    ]
);

const indeces = [
    0, 1, 2,
    2, 3, 0
]

const color = new Float32Array(
    [
        1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 0.0, 1.0,
        1.0, 1.0, 1.0
    ]
);

const normal = new Float32Array(
    [
        1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, 1.0,
        1.0, 1.0, 1.0
    ]
);

geometry.setAttribute('position' , new THREE.BufferAttribute(vertices , 3));
geometry.setAttribute('color' , new THREE.BufferAttribute(color , 3));
geometry.setAttribute('normal' , new THREE.BufferAttribute(normal , 3));
geometry.setIndex(indeces);

const material = new THREE.MeshStandardMaterial({vertexColors:true});
const cube = new THREE.Mesh( geometry , material );

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
