import * as THREE from 'three';
import gsap from 'gsap';

// Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Subtle ambient light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create Memory Card Placeholder
const memoryCardGeometry = new THREE.BoxGeometry(2, 3, 0.2);
const memoryCardMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
const memoryCard = new THREE.Mesh(memoryCardGeometry, memoryCardMaterial);
memoryCard.position.set(0, 0, -5);
scene.add(memoryCard);

// for (let i = 0; i < 3; i++) {
//   const card = new THREE.Mesh(geometry, material);
//   card.position.set(i * 3 - 3, 0, -5); // Adjust positions for spacing
//   scene.add(card);
// }


// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    memoryCard.rotation.y += 0.01; // Rotate the card for effect
    renderer.render(scene, camera);
}
animate();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


