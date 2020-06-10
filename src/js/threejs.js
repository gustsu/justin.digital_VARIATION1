var scene, camera, renderer, sphere;
var SPEED = 0.001;

function createSphere() {
	var geometry = new THREE.SphereGeometry(5, 10, 10);
	var material = new THREE.MeshNormalMaterial({ color: 0xffffff, wireframe: true });
	sphere = new THREE.Mesh(geometry, material);
	scene.add(sphere);
}

// set up the environment -
// initiallize scene, camera, objects and renderer
function init() {
	// create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	//scene.fog = new THREE.FogExp2(0xcccccc, 0.05);

	// create an locate the camera
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 2;

	createSphere();

	// create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.getElementById("background-div").appendChild(renderer.domElement);
}

// main animation loop
function mainLoop() {
	sphere.rotation.x += SPEED;
	sphere.rotation.y += SPEED;
	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
}

init();
mainLoop();
