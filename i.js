let scene, camera, renderer, cube;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({
    antialias: true,  
});
renderer.setClearColor("#3fbecc");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(2, 2, 2);
var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.PointLight(0x6FBECC, 15, 100);
light.position.set(10, 60, 15);
scene.add(light);

camera.position.z = 10;    

function onMouseMove(e) {
    e.preventDefault(); 

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);

    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xFF0000);
    }

}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousemove', onMouseMove, false);
