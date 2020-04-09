var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({
    antialias: true,  
});
renderer.setClearColor("#3fbecc");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshLambertMaterial({color: 0xF8F8F8});

var light = new THREE.PointLight(0x6FBECC, 10, 50);
light.position.set(0, 0, 90);
scene.add(light);

var light = new THREE.PointLight(0x6FBECC, 10, 1700);
light.position.set(-1000, 0, 1000);
scene.add(light);

camera.position.z = 30;

for (let i = 0; i < 3000; i++) {
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = (Math.random() - 0.5) * 100;
    cube.position.y = (Math.random() - 0.5) * 250;
    cube.position.z = (Math.random() - 0.5) * 100;
    cube.rotation.x = (Math.random() - 0.5) * 150;
    cube.rotation.y = (Math.random() - 0.5) * 150;
    cube.rotation.z = (Math.random() - 0.5) * 150;
    
    scene.add(cube); 
}

function createCubes() {
}

function onMouseMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clintY / window.innerHeight) * 2 + 1;

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (let i = 0; i < intersects.length; i++) {
    }
    raycaster.setFromCamera(mouse, camera);

}

function animate() {
    requestAnimationFrame(animate);

    for (let i = 0; i <= 3000; i++) {
        scene.children[i].rotation.x += 0.009;
        scene.children[i].rotation.y += 0.007;
        // scene.children[i].position.y += 0.1;
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', createCubes);
window.addEventListener('resize', onWindowResize, false);
animate();