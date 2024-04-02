/*
 * UBC CPSC 314
 * Assignment 3 Template
 */
import {
  setup,
  createScene,
  loadAndPlaceGLB,
  loadAndPlaceOBJ,
} from "./js/setup.js";
import * as THREE from "./js/three.module.js";
import { SourceLoader } from "./js/SourceLoader.js";
import { THREEx } from "./js/KeyboardState.js";

// Setup the renderer
// You should look into js/setup.js to see what exactly is done here.
const { renderer, canvas } = setup();

/////////////////////////////////
//   YOUR WORK STARTS BELOW    //
/////////////////////////////////

// Uniforms - Pass these into the appropriate vertex and fragment shader files
const spherePosition = { type: "v3", value: new THREE.Vector3(0.0, 0.0, 0.0) };
const tangentDirection = {
  type: "v3",
  value: new THREE.Vector3(0.5, 0.0, 1.0),
};

const ambientColor = { type: "c", value: new THREE.Color(0.0, 0.0, 1.0) };
const diffuseColor = { type: "c", value: new THREE.Color(0.0, 1.0, 1.0) };
const specularColor = { type: "c", value: new THREE.Color(1.0, 1.0, 1.0) };
const lightColor = { type: "c", value: new THREE.Color(1.0, 1.0, 1.0) };
const toonColor = { type: "c", value: new THREE.Color(1.0, 0.8, 0.4) };
const toonColor2 = { type: "c", value: new THREE.Color(0.8, 0.1, 0.35) };
const outlineColor = { type: "c", value: new THREE.Color(0.0, 0.0, 0.0) };

const kAmbient = { type: "f", value: 0.3 };
const kDiffuse = { type: "f", value: 0.6 };
const kSpecular = { type: "f", value: 1.0 };
const shininess = { type: "f", value: 50.0 };
const ticks = { type: "f", value: 0.0 };

const sphereLight = new THREE.PointLight(0xffffff, 200);

// Shader materials
const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
  },
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
    shininess: shininess,
  },
});

const toonMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
    toonColor: toonColor,
    toonColor2: toonColor2,
    outlineColor: outlineColor,
  },
});

const dotsMaterial = new THREE.ShaderMaterial({
  uniforms: {
    ticks: ticks,
  },
});

const heatMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
    ticks: ticks,
  },
});

const glitchMaterial = new THREE.ShaderMaterial({
  uniforms: {
    spherePosition: spherePosition,
  },
});

// Load shaders
const shaderFiles = [
  "glsl/sphere.vs.glsl",
  "glsl/sphere.fs.glsl",
  "glsl/blinn_phong.vs.glsl",
  "glsl/blinn_phong.fs.glsl",
  "glsl/toon.vs.glsl",
  "glsl/toon.fs.glsl",
  "glsl/dots.vs.glsl",
  "glsl/dots.fs.glsl",
  "glsl/heat.vs.glsl",
  "glsl/heat.fs.glsl",
  "glsl/glitch.vs.glsl",
  "glsl/glitch.fs.glsl",
];

new SourceLoader().load(shaderFiles, function (shaders) {
  sphereMaterial.vertexShader = shaders["glsl/sphere.vs.glsl"];
  sphereMaterial.fragmentShader = shaders["glsl/sphere.fs.glsl"];

  blinnPhongMaterial.vertexShader = shaders["glsl/blinn_phong.vs.glsl"];
  blinnPhongMaterial.fragmentShader = shaders["glsl/blinn_phong.fs.glsl"];

  toonMaterial.vertexShader = shaders["glsl/toon.vs.glsl"];
  toonMaterial.fragmentShader = shaders["glsl/toon.fs.glsl"];

  dotsMaterial.vertexShader = shaders["glsl/dots.vs.glsl"];
  dotsMaterial.fragmentShader = shaders["glsl/dots.fs.glsl"];

  heatMaterial.vertexShader = shaders["glsl/heat.vs.glsl"];
  heatMaterial.fragmentShader = shaders["glsl/heat.fs.glsl"];

  glitchMaterial.vertexShader = shaders["glsl/glitch.vs.glsl"];
  glitchMaterial.fragmentShader = shaders["glsl/glitch.fs.glsl"];
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
  sphere.position.set(0.0, -9.5, 0.0);
  sphere.parent = worldFrame;
  scene.add(sphere);
  scene.background = new THREE.Color(0x000000);

  loadAndPlaceGLB(
    "gltf/low_poly_person.glb",
    shaders.GLITCH.material,
    function (girl) {
      girl.position.set(0, -10.3, 10.0);
      girl.scale.set(0.02, 0.02, 0.02);
      girl.rotation.y = Math.PI;
      girl.parent = worldFrame;
      scene.add(girl);
    }
  );

  // Create a texture loader
  const textureLoader = new THREE.TextureLoader();

  var planeMesh;
  var women;
  var ig;
  var motion;
  var ea;
  var twitter;
  var mobile;
  var fifa;
  var linkedin;
  var wiki;
  var intern;
  var layoff;
  var starwars;  


  if (shader.key === shaders.TOON.key) {
    const womenT = textureLoader.load("gltf/women.png");
    const womenG = new THREE.PlaneGeometry(20, 15);
    const womenM = new THREE.MeshBasicMaterial({ map: womenT });
    women = new THREE.Mesh(womenG, womenM);
    women.rotation.y = 3.0;
    women.position.set(-15, 2, 30);
    scene.add(women);

    const igT = textureLoader.load("gltf/ig.png");
    const igG = new THREE.PlaneGeometry(5, 5);
    const igM = new THREE.MeshBasicMaterial({ map: igT });
    ig = new THREE.Mesh(igG, igM);
    ig.rotation.y = 2.17;
    ig.position.set(-30, 0, 20);
    scene.add(ig);

    const motionT = textureLoader.load("gltf/motion.png");
    const motionG = new THREE.PlaneGeometry(10, 10);
    const motionM = new THREE.MeshBasicMaterial({ map: motionT });
    motion = new THREE.Mesh(motionG, motionM);
    motion.rotation.y = 1.77;
    motion.position.set(-40, 15, 13);
    scene.add(motion);

    const eaT = textureLoader.load("gltf/ea.png");
    const eaG = new THREE.PlaneGeometry(20, 10);
    const eaM = new THREE.MeshBasicMaterial({ map: eaT });
    ea = new THREE.Mesh(eaG, eaM);
    ea.rotation.y = 1.4;
    ea.position.set(-30, 0, -5);
    scene.add(ea);

    const starTexture = textureLoader.load("gltf/lawsuit.png");
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.MeshBasicMaterial({ map: starTexture });
    planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.rotation.y = 0.9;
    planeMesh.position.set(-20, 10, -20);
    scene.add(planeMesh);

    const twitterT = textureLoader.load("gltf/twitter.png");
    const twitterG = new THREE.PlaneGeometry(10, 7);
    const twitterM = new THREE.MeshBasicMaterial({ map: twitterT });
    twitter = new THREE.Mesh(twitterG, twitterM);
    twitter.rotation.y = 0.2;
    twitter.position.set(-10, -5, -30);
    scene.add(twitter);

    const mobileT = textureLoader.load("gltf/mobile.png");
    const mobileG = new THREE.PlaneGeometry(15, 13);
    const mobileM = new THREE.MeshBasicMaterial({ map: mobileT });
    mobile = new THREE.Mesh(mobileG, mobileM);
    mobile.rotation.y = 0.0;
    mobile.position.set(0, 5, -40);
    scene.add(mobile);

    const fifaT = textureLoader.load("gltf/fifa.png");
    const fifaG = new THREE.PlaneGeometry(20, 4);
    const fifaM = new THREE.MeshBasicMaterial({ map: fifaT });
    fifa = new THREE.Mesh(fifaG, fifaM);
    fifa.rotation.y = -0.2;
    fifa.position.set(10, -3, -20);
    scene.add(fifa);

    const linkedinT = textureLoader.load("gltf/linkedin.png");
    const linkedinG = new THREE.PlaneGeometry(3, 3);
    const linkedinM = new THREE.MeshBasicMaterial({ map: linkedinT });
    linkedin = new THREE.Mesh(linkedinG, linkedinM);
    linkedin.rotation.y = -0.4;
    linkedin.position.set(20, 10, -30);
    scene.add(linkedin);

    const wikiT = textureLoader.load("gltf/wiki.png");
    const wikiG = new THREE.PlaneGeometry(17, 17);
    const wikiM = new THREE.MeshBasicMaterial({ map: wikiT });
    wiki = new THREE.Mesh(wikiG, wikiM);
    wiki.rotation.y = -1.2;
    wiki.position.set(30, 5, -10);
    scene.add(wiki);

    const internT = textureLoader.load("gltf/intern.png");
    const internG = new THREE.PlaneGeometry(10, 10);
    const internM = new THREE.MeshBasicMaterial({ map: internT });
    intern = new THREE.Mesh(internG, internM);
    intern.rotation.y = -1.8;
    intern.position.set(40, -5, 10);
    scene.add(intern);

    const layoffT = textureLoader.load("gltf/layoff.png");
    const layoffG = new THREE.PlaneGeometry(20, 10);
    const layoffM = new THREE.MeshBasicMaterial({ map: layoffT });
    layoff = new THREE.Mesh(layoffG, layoffM);
    layoff.rotation.y = -2.3;
    layoff.position.set(20, 10, 20);
    scene.add(layoff);

    const starwarsT = textureLoader.load("gltf/starwars.png");
    const starwarsG = new THREE.PlaneGeometry(10, 10);
    const starwarsM = new THREE.MeshBasicMaterial({ map: starwarsT });
    starwars = new THREE.Mesh(starwarsG, starwarsM);
    starwars.rotation.y = -3.0;
    starwars.position.set(15, 2, 40);
    scene.add(starwars);
  }

  canvas.addEventListener("mousedown", onCanvasMouseDown);
  function onCanvasMouseDown(event) {
    // Calculate mouse position in normalized device coordinates (NDC)
    const mouse = {
      x: (event.clientX / canvas.clientWidth) * 2 - 1,
      y: -(event.clientY / canvas.clientHeight) * 2 + 1,
    };

    // Create a raycaster
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, scenes[0].camera); // Use the camera from the first scene

    if (shader.key === shaders.TOON.key) {
      if (raycaster.intersectObject(planeMesh, true).length > 0) {
        console.log("hello");
        window.open(
          "https://bc.ctvnews.ca/video-game-maker-faces-lawsuit-over-alleged-in-game-gambling-1.5225920?cache=rbyihszjzxf",
          "_blank"
        );
      } else if (raycaster.intersectObject(women, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.ea.com/en-ca/news/our-continued-efforts-to-champion-women-in-sports-and-gaming",
          "_blank"
        );
      } else if (raycaster.intersectObject(ig, true).length > 0) {
        console.log("hello");
        window.open("https://www.instagram.com/ea/", "_blank");
      } else if (raycaster.intersectObject(motion, true).length > 0) {
        console.log("hello");
        window.open(
          "https://blog.playstation.com/2022/07/27/the-realism-of-fifa-23s-new-motion-capture-technology/",
          "_blank"
        );
      } else if (raycaster.intersectObject(ea, true).length > 0) {
        console.log("hello");
        window.open("https://www.ea.com/", "_blank");
      } else if (raycaster.intersectObject(twitter, true).length > 0) {
        console.log("hello");
        window.open("https://twitter.com/EA", "_blank");
      } else if (raycaster.intersectObject(mobile, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.axios.com/2022/05/11/ea-activision-ubisoft-mobile-games",
          "_blank"
        );
      } else if (raycaster.intersectObject(fifa, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.wired.com/story/ea-sports-fc-24-fifa-24/",
          "_blank"
        );
      } else if (raycaster.intersectObject(linkedin, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.linkedin.com/company/electronic-arts/",
          "_blank"
        );
      } else if (raycaster.intersectObject(wiki, true).length > 0) {
        console.log("hello");
        window.open("https://en.wikipedia.org/wiki/Electronic_Arts", "_blank");
      } else if (raycaster.intersectObject(intern, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.ea.com/news/ea-named-top-25-best-overall-internship",
          "_blank"
        );
      } else if (raycaster.intersectObject(layoff, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.cnn.com/2024/02/28/tech/electronic-arts-layoffs/index.html",
          "_blank"
        );
      } else if (raycaster.intersectObject(starwars, true).length > 0) {
        console.log("hello");
        window.open(
          "https://www.businessinsider.com/reddit-world-record-downvotes-ea-star-wars-battlefront-2-2019-9#:~:text=Reddit%20users%20have%20discovered%20that,Star%20Wars%3A%20Battlefront%202.%22",
          "_blank"
        );
      }
    }
  }
  var floorTexture;
  if (shader.key === shaders.BLINNPHONG.key) {
    floorTexture = textureLoader.load("gltf/meta.png", () => {});
  } else if (shader.key === shaders.TOON.key) {
    floorTexture = textureLoader.load("gltf/image.png", () => {});
  } else if (shader.key === shaders.DOTS.key) {
    floorTexture = textureLoader.load("gltf/amazon.png", () => {});
  } else if (shader.key === shaders.HEAT.key) {
    floorTexture = textureLoader.load("gltf/google.png", () => {});
  } else if (shader.key === shaders.GLITCH.key) {
    floorTexture = textureLoader.load("gltf/earth.png", () => {});
  } else {
    floorTexture = textureLoader.load("gltf/image.png", () => {});
  }
  const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });

  const terrainGeometry = new THREE.BoxGeometry(50, 50, 2);
  const terrain = new THREE.Mesh(terrainGeometry, floorMaterial);
  terrain.position.y = -11.3;
  terrain.rotation.set(-Math.PI / 2, 0, 0);
  scene.add(terrain);

  const ambientLight = new THREE.AmbientLight(0xffffff, 3.0);
  scene.add(ambientLight);

  sphereLight.parent = worldFrame;
  scene.add(sphereLight);

  // If there's no helmet, then only place the armadillo. i.e. key 1, 2, 3
  loadAndPlaceOBJ("obj/armadillo.obj", shader.material, function (armadillo) {
    armadillo.position.set(0.0, -2.3, -10.0);
    armadillo.rotation.y = Math.PI;
    armadillo.scale.set(10, 10, 10);
    armadillo.parent = worldFrame;
    scene.add(armadillo);
  });

  scenes.push({ scene, camera });
}

// Listen to keyboard events.
const keyboard = new THREEx.KeyboardState();
function checkKeyboard() {
  if (keyboard.pressed("1")) mode = shaders.BLINNPHONG.key;
  else if (keyboard.pressed("2")) mode = shaders.TOON.key;
  else if (keyboard.pressed("3")) mode = shaders.DOTS.key;
  else if (keyboard.pressed("4")) mode = shaders.HEAT.key;
  else if (keyboard.pressed("5")) mode = shaders.GLITCH.key;

  if (keyboard.pressed("W")) spherePosition.value.z -= 0.3;
  else if (keyboard.pressed("S")) spherePosition.value.z += 0.3;

  if (keyboard.pressed("A")) spherePosition.value.x -= 0.3;
  else if (keyboard.pressed("D")) spherePosition.value.x += 0.3;

  if (keyboard.pressed("E")) spherePosition.value.y -= 0.3;
  else if (keyboard.pressed("Q")) spherePosition.value.y += 0.3;

  sphereLight.position.set(
    spherePosition.value.x,
    spherePosition.value.y,
    spherePosition.value.z
  );

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
