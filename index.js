/* import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

window.onload = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#55CBFC");

  const camera = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    -700,
    1000
  );

  const map = document.getElementById("map");

  camera.position.set(1, 1, 1);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  map.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  controls.update();

  animate();

  window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  //FLOOR
  const geometry = new THREE.BoxGeometry(850, 30, 850);
  const material = new THREE.MeshBasicMaterial({
    color: "#1980BE",
    side: THREE.DoubleSide,
  });
  const floor = new THREE.Mesh(geometry, material);
  scene.add(floor);

  //Stage
  const stageGeometry = new THREE.BoxGeometry(100, 70, 80);
  const stageMaterial = new THREE.MeshBasicMaterial({
    color: "orange",
  });
  const stage = new THREE.Mesh(stageGeometry, stageMaterial);
  stage.position.set(150, 50, 0);
  scene.add(stage);

  //Sweet Shack
  const sweetShackGeometry = new THREE.BoxGeometry(100, 70, 80);
  const sweetShackMaterial = new THREE.MeshBasicMaterial({
    color: "pink",
  });
  const sweetShack = new THREE.Mesh(sweetShackGeometry, sweetShackMaterial);
  sweetShack.position.set(150, 50, -200);
  scene.add(sweetShack);

  
};*/

import { Application } from "@splinetool/runtime";

window.onload = () => {
  const canvas = document.getElementById("canvas3d");
  const app = new Application(canvas);
  app.load("https://prod.spline.design/HFunfSmwS1p8oo5r/scene.splinecode");

  const enter = document.getElementById("enter");

  enter.onclick = () => {
    console.log("hey");
    document.body.style.transform = "translateX(-100%)";
  };
};
