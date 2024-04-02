/*
 * UBC CPSC 314
 * Assignment 3 Template
 */
import { setup, createScene, loadAndPlaceGLB, loadAndPlaceOBJ } from './js/setup.js';
import * as THREE from './js/three.module.js';
import { SourceLoader } from './js/SourceLoader.js';
import { THREEx } from './js/KeyboardState.js';

// Setup the renderer
// You should look into js/setup.js to see what exactly is done here.
const { renderer, canvas } = setup();

/////////////////////////////////
//   YOUR WORK STARTS BELOW    //
/////////////////////////////////

// Uniforms - Pass these into the appropriate vertex and fragment shader files
const spherePosition = { type: 'v3', value: new THREE.Vector3(0.0, 0.0, 0.0) };
const tangentDirection = { type: 'v3', value: new THREE.Vector3(0.5, 0.0, 1.0) };

const ambientColor = { type: 'c', value: new THREE.Color(0.0, 0.0, 1.0) };
const diffuseColor = { type: 'c', value: new THREE.Color(0.0, 1.0, 1.0) };
const specularColor = { type: 'c', value: new THREE.Color(1.0, 1.0, 1.0) };
const lightColor = { type: 'c', value: new THREE.Color(1.0, 1.0, 1.0) };
const toonColor = { type: 'c', value: new THREE.Color(1.0, 0.8, 0.4) };
const toonColor2 = { type: 'c', value: new THREE.Color(0.8, 0.1, 0.35) };
const outlineColor = { type: 'c', value: new THREE.Color(0.0, 0.0, 0.0) };

const kAmbient = { type: "f", value: 0.3 };
const kDiffuse = { type: "f", value: 0.6 };
const kSpecular = { type: "f", value: 1.0 };
const shininess = { type: "f", value: 50.0 };
const ticks = { type: "f", value: 0.0 };

const sphereLight = new THREE.PointLight(0xffffff, 200);


// Shader materials
const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition
  }
});

const blinnPhongMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
    ambientColor: ambientColor,
    diffuseColor: diffuseColor,
    specularColor: specularColor,
    kAmbient: kAmbient,
    kDiffuse: kDiffuse,
    kSpecular: kSpecular,
    shininess: shininess
  }
});

const toonMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
    toonColor: toonColor,
    toonColor2: toonColor2,
    outlineColor: outlineColor
  }
});

const dotsMaterial = new THREE.ShaderMaterial({
  uniforms: {
    ticks: ticks
  }
});

const heatMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
    ticks: ticks
  }
});

const glitchMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition
  }
});

// Load shaders
const shaderFiles = [
  'glsl/sphere.vs.glsl',
  'glsl/sphere.fs.glsl',
  'glsl/blinn_phong.vs.glsl',
  'glsl/blinn_phong.fs.glsl',
  'glsl/toon.vs.glsl',
  'glsl/toon.fs.glsl',
  'glsl/dots.vs.glsl',
  'glsl/dots.fs.glsl',
  'glsl/heat.vs.glsl',
  'glsl/heat.fs.glsl',
  'glsl/glitch.vs.glsl',
  'glsl/glitch.fs.glsl',
];

new SourceLoader().load(shaderFiles, function (shaders) {
  sphereMaterial.vertexShader = shaders['glsl/sphere.vs.glsl'];
  sphereMaterial.fragmentShader = shaders['glsl/sphere.fs.glsl'];

  blinnPhongMaterial.vertexShader = shaders['glsl/blinn_phong.vs.glsl'];
  blinnPhongMaterial.fragmentShader = shaders['glsl/blinn_phong.fs.glsl'];

  toonMaterial.vertexShader = shaders['glsl/toon.vs.glsl'];
  toonMaterial.fragmentShader = shaders['glsl/toon.fs.glsl'];

  dotsMaterial.vertexShader = shaders['glsl/dots.vs.glsl'];
  dotsMaterial.fragmentShader = shaders['glsl/dots.fs.glsl'];

  heatMaterial.vertexShader = shaders['glsl/heat.vs.glsl'];
  heatMaterial.fragmentShader = shaders['glsl/heat.fs.glsl'];
  
  glitchMaterial.vertexShader = shaders['glsl/glitch.vs.glsl'];
  glitchMaterial.fragmentShader = shaders['glsl/glitch.fs.glsl'];
});

// Define the shader modes
const shaders = {
  BLINNPHONG: { key: 0, material: blinnPhongMaterial },
  TOON: { key: 1, material: toonMaterial },
  DOTS: { key: 2, material: dotsMaterial },
  PBR: { key: 3, material: glitchMaterial },
  HEAT: { key: 4, material: heatMaterial },
  GLITCH: { key: 5, material: glitchMaterial },
};

let mode = shaders.TOON.key; // Default

// Set up scenes
let scenes = [];
for (let shader of Object.values(shaders)) {
  // Create the scene
  const { scene, camera, worldFrame } = createScene(canvas, renderer);

  // Create the main sphere geometry (light source)
  // https://threejs.org/docs/#api/en/geometries/SphereGeometry
  const sphereGeometry = new THREE.SphereGeometry(0.2, 1.0, 1.0);
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(0.0, 1.5, 0.0);
  sphere.parent = worldFrame;
  scene.add(sphere);
  scene.background = new THREE.Color(0x000000);

  loadAndPlaceGLB("gltf/low_poly_person.glb", shaders.GLITCH.material, function (girl) {
    girl.position.set(0, 0, 10.0);
    girl.scale.set(0.02, 0.02, 0.02);
    girl.rotation.y = Math.PI;
    girl.parent = worldFrame;
    scene.add(girl);
  });

  // Create a texture loader
const textureLoader = new THREE.TextureLoader();

// Load the star image
const starTexture = textureLoader.load('gltf/test.jpg', () => {
    // This function is optional and runs after the image is loaded
    console.log('Star image loaded');
});

// Define the size of the plane
const planeWidth = 10; // Width of the plane
const planeHeight = 10; // Height of the plane

// Create a plane geometry
const planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight);

// Create a material using the star texture
const planeMaterial = new THREE.MeshBasicMaterial({ map: starTexture });



// Create a mesh using the geometry and material
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

planeMesh.rotation.y = 0.9;

// Position the plane in the scene
planeMesh.position.set(0, 0, -5); // Adjust the position as needed

// Add the plane to your scene
scene.add(planeMesh);

canvas.addEventListener('mousedown', onCanvasMouseDown);
function onCanvasMouseDown(event) {
  // Calculate mouse position in normalized device coordinates (NDC)
  const mouse = {
    x: (event.clientX / canvas.clientWidth) * 2 - 1,
    y: -(event.clientY / canvas.clientHeight) * 2 + 1
  };

  // Create a raycaster
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, scenes[0].camera); // Use the camera from the first scene

  // If the armadillo is clicked, log "hello" to the console
  if (raycaster.intersectObject(planeMesh, true).length > 0) {
    console.log('hello');
  }
}
var floorTexture;
if (shader.key === shaders.BLINNPHONG.key) {
  floorTexture = textureLoader.load('gltf/meta.png', () => {});
} else if (shader.key === shaders.TOON.key) {
  floorTexture = textureLoader.load('gltf/image.png', () => {});
} else if (shader.key === shaders.DOTS.key) {
  floorTexture = textureLoader.load('gltf/apple.png', () => {});
} else if (shader.key === shaders.HEAT.key) {
  floorTexture = textureLoader.load('gltf/amazon.png', () => {});
} else if (shader.key === shaders.GLITCH.key) {
  floorTexture = textureLoader.load('gltf/earth.png', () => {});
} else {
  floorTexture = textureLoader.load('gltf/image.png', () => {});
}
const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });

const terrainGeometry = new THREE.BoxGeometry(50, 50, 2);
const terrain = new THREE.Mesh(terrainGeometry, floorMaterial);
terrain.position.y = -0.9;
terrain.rotation.set(- Math.PI / 2, 0, 0);
scene.add(terrain);


    const ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
    scene.add(ambientLight);

    sphereLight.parent = worldFrame;
    scene.add(sphereLight);

    // If there's no helmet, then only place the armadillo. i.e. key 1, 2, 3
    loadAndPlaceOBJ('obj/armadillo.obj', shader.material, function (armadillo) {
      armadillo.position.set(0.0, 8.3, -10.0);
      armadillo.rotation.y = Math.PI;
      armadillo.scale.set(10, 10, 10);
      armadillo.parent = worldFrame;
      armadillo.addEventListener('click', () => {
        console.log('hello');
      });
      scene.add(armadillo);
      
    });

  scenes.push({ scene, camera });
}



// Listen to keyboard events.
const keyboard = new THREEx.KeyboardState();
function checkKeyboard() {

  if (keyboard.pressed("1"))
    mode = shaders.BLINNPHONG.key;
  else if (keyboard.pressed("2"))
    mode = shaders.TOON.key;
  else if (keyboard.pressed("3"))
    mode = shaders.DOTS.key;
  else if (keyboard.pressed("4"))
    mode = shaders.GLITCH.key;
  else if (keyboard.pressed("5"))
    mode = shaders.HEAT.key;

  if (keyboard.pressed("W"))
    spherePosition.value.z -= 0.3;
  else if (keyboard.pressed("S"))
    spherePosition.value.z += 0.3;

  if (keyboard.pressed("A"))
    spherePosition.value.x -= 0.3;
  else if (keyboard.pressed("D"))
    spherePosition.value.x += 0.3;

  if (keyboard.pressed("E"))
    spherePosition.value.y -= 0.3;
  else if (keyboard.pressed("Q"))
    spherePosition.value.y += 0.3;

  sphereLight.position.set(spherePosition.value.x, spherePosition.value.y, spherePosition.value.z);

  // The following tells three.js that some uniforms might have changed
  sphereMaterial.needsUpdate = true;
  blinnPhongMaterial.needsUpdate = true;
  toonMaterial.needsUpdate = true;
  dotsMaterial.needsUpdate = true;
  heatMaterial.needsUpdate = true;
  glitchMaterial.needsUpdate = true;
}

// clock = THREE.Clock;

// Setup update callback
function update() {
  checkKeyboard();
  ticks.value += 1 / 100.0;

  // Requests the next update call, this creates a loop
  requestAnimationFrame(update);
  const { scene, camera } = scenes[mode];
  renderer.render(scene, camera);
}



// Start the animation loop.
update();







// is the dot color tranition fine
// is the fact that intensity of the light is not changing fine
