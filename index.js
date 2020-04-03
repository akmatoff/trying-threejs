let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,  
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(3, 3, 3);
    // const material = new THREE.MeshPhongMaterial({color: 0x3333cc});

    const texture = new THREE.TextureLoader().load("textures/lavatile.jpg");
    texture.wrapS = THREE.repeatWrapping;
    texture.wrapT = THREE.repeatWrapping;

    const material = new THREE.MeshLambertMaterial({
        map: texture,
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // const ambientLight = new THREE.AmbientLight(0xbaddff, 1);
    // scene.add(ambientLight);

    const light = new THREE.PointLight(0xbaddff, 15, 100);
    light.position.set(50, 50, 50);
    scene.add(light);

    camera.position.z = 10;

    // const controls = new OrbitControls(camera, renderer.domElement);
    // camera.position.set(0, 0, 10);
    // controls.update();

}

function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += Math.PI * .005;
    // cube.rotation.y += Math.PI * 0.005;

    // controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousemove', onMouseMove, false);

init();
animate();