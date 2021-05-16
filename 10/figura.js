let canvas = document.getElementById("glcanvas");

const scene = new THREE.Scene({color: 0xfff});

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light;  // A light shining from the direction of the camera; moves with the camera.
light = new THREE.DirectionalLight();
light.position.set(-10, -2, 1);
camera.add(light);
scene.add(camera);

const material = new THREE.MeshPhongMaterial(
    {
        color: 0x454545, 
        // wireframe: true
    });

const baseGeometry = new THREE.CylinderGeometry(0.75, 0.8, 0.35, 100);

const base = new THREE.Mesh(baseGeometry, material);

const upperBaseGeometry = new THREE.CylinderGeometry(0.3, 0.7, 3, 100);

const upperBase = new THREE.Mesh(upperBaseGeometry, material);
upperBase.position.y = 1.5;

let group = new THREE.Group();
group.add(base);
group.add(upperBase);
group.position.set(0, -3.8, 0);
group.scale.set(3, 2.5, 1);


const underheadgeometry1 = new THREE.CylinderGeometry(1.6, 2, 0.6, 100);
const underhead1  = new THREE.Mesh(underheadgeometry1, material);
underhead1.position.y = 2.5;

const underheadgeometry2 = new THREE.CylinderGeometry(1, 1.4, 0.6, 100);
const underhead2  = new THREE.Mesh(underheadgeometry2, material);
underhead2.position.y = 3;

const underheadgeometry3 = new THREE.CylinderGeometry(1.8, 0.8, 2, 100);
const underhead3  = new THREE.Mesh(underheadgeometry3, material);
underhead3.position.y = 4;

const overheadgeometry = new THREE.CylinderGeometry(1, 1.8, 0.6, 100);
const overhead  = new THREE.Mesh(overheadgeometry, material);
overhead.position.y = 5.3;

const cubegeometry1 = new THREE.BoxGeometry( 0.8, 2, 0.8 );
const cube1 = new THREE.Mesh( cubegeometry1, material );
cube1.position.set(0,6.5,0);

const cubegeometry2 = new THREE.BoxGeometry( 2, 0.8, 0.8 );
const cube2 = new THREE.Mesh( cubegeometry2, material );
cube2.position.set(0,6.6,0);

let head = new THREE.Group();
head.add(underhead1, underhead2, underhead3, overhead, cube1, cube2 );
head.position.set(0,1.2,0.3);

let chessPawn = new THREE.Group();
chessPawn.add(group, head);
scene.add(chessPawn);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 8;
camera.position.y = 4;

animate();
