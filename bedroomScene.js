
import * as THREE from 'https://threejs.org/build/three.module.js';
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 4.2); 


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const floorGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xffc0cb, side: THREE.DoubleSide, wireframe: false });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);


const wallGeometry = new THREE.BoxGeometry(10, 10, 0.1);

const wallMaterial1 = new THREE.MeshBasicMaterial({ color: 0xfff5e1 });
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial1);
wall1.position.set(0, 1, -5);
scene.add(wall1);

const wallMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffebc1 });
const wall2 = new THREE.Mesh(wallGeometry, wallMaterial2);
wall2.position.set(5, 1, 0);
wall2.rotation.y = Math.PI / 2;
scene.add(wall2);

const wallMaterial3 = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const wall3 = new THREE.Mesh(wallGeometry, wallMaterial3);
wall3.position.set(0, 1, 5);
scene.add(wall3);

const wallMaterial4 = new THREE.MeshBasicMaterial({ color: 0xffe4b5 });
const wall4 = new THREE.Mesh(wallGeometry, wallMaterial4);
wall4.position.set(-5, 1, 0);
wall4.rotation.y = Math.PI / 2;
scene.add(wall4);


const ceilingGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xffc0cb, side: THREE.DoubleSide, wireframe: false });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.rotation.x = -Math.PI / 2;
ceiling.position.y = 3.3;
scene.add(ceiling);


const bedGeometry = new THREE.BoxGeometry(2, 0.2, 3);
const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x663300 });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
bed.position.set(3.2, 0.15, -1.8);
scene.add(bed);


const sheetsGeometry = new THREE.BoxGeometry(2, 0.1, 3);
const sheetsMaterial = new THREE.MeshBasicMaterial({ color: 0xadd8e6 });
const sheets = new THREE.Mesh(sheetsGeometry, sheetsMaterial);
sheets.position.set(3.2, 0.25, -1.8);
scene.add(sheets);


const pillowGeometry = new THREE.BoxGeometry(1.6, 0.2, 0.8); 
const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0x1e90ff }); 
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(3.1, 0.3, -2.2); 
scene.add(pillow);


const windowFrameGeometry = new THREE.BoxGeometry(0.1, 1, 1);
const windowFrameMaterial = new THREE.MeshBasicMaterial({ color: 0x87cefa });
const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
windowFrame.position.set(-5, 2, 0);
scene.add(windowFrame);


const glassGeometry = new THREE.PlaneGeometry(0.09, 0.98);
const glassMaterial = new THREE.MeshStandardMaterial({ color: 0xadd8e6, transparent: true, opacity: 0.7 });
const glass1 = new THREE.Mesh(glassGeometry, glassMaterial);
glass1.position.set(-4.95, 2, 0.5);
scene.add(glass1);

const glass2 = new THREE.Mesh(glassGeometry, glassMaterial);
glass2.position.set(-4.95, 2, 0);
scene.add(glass2);

const glass3 = new THREE.Mesh(glassGeometry, glassMaterial);
glass3.position.set(-4.95, 2, -0.5);
scene.add(glass3);


const sillGeometry = new THREE.BoxGeometry(0.1, 0.05, 1);
const sillMaterial = new THREE.MeshBasicMaterial({ color: 0x663300 });
const sill = new THREE.Mesh(sillGeometry, sillMaterial);
sill.position.set(-4.95, 1.975, 0);
scene.add(sill);


const tableGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.8); 
const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); 
const bedsideTable = new THREE.Mesh(tableGeometry, tableMaterial);
bedsideTable.position.set(1.3, 0.4, -2.10); 
scene.add(bedsideTable);


const handleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 16); 
const handleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); 


const handle1 = new THREE.Mesh(handleGeometry, handleMaterial);
handle1.position.set(1.3, 0.4, -1.6);
scene.add(handle1);

const studyTableGeometry = new THREE.BoxGeometry(1.5, 0.6, 2); 
const studyTableMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); 
const studyTable = new THREE.Mesh(studyTableGeometry, studyTableMaterial);
studyTable.position.set(-4.9, 0.3, -2.5); 
scene.add(studyTable);


const baseGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 32); 
const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.set(-4.9, 0.6, -2.5); 
scene.add(base);


const neckGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 32); 
const neckMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
const neck = new THREE.Mesh(neckGeometry, neckMaterial);
neck.position.set(-4.9, 0.80, -2.6); 
scene.add(neck);

const screenGeometry = new THREE.BoxGeometry(0.50, 0.8, 1); 
const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); 
const screen = new THREE.Mesh(screenGeometry, screenMaterial);
screen.position.set(-5, 1.17, -2.48); 
scene.add(screen);

const cabGeometry = new THREE.BoxGeometry(2, 4, 1.5); 
const cabMaterial = new THREE.MeshBasicMaterial({ color: 0x8b4513 }); 
const rack = new THREE.Mesh(cabGeometry, cabMaterial);
rack.position.set(5, 0.5, 1.3); 
scene.add(rack);

const cabinetHandleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 16); 
const cabinetHandleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); 


const cabinetHandle1 = new THREE.Mesh(cabinetHandleGeometry, cabinetHandleMaterial);
cabinetHandle1.position.set(4, 1, 1.1);
scene.add(cabinetHandle1);


const cabinetHandle2 = new THREE.Mesh(cabinetHandleGeometry, cabinetHandleMaterial);
cabinetHandle2.position.set(4, 1, 1.3); 
scene.add(cabinetHandle2);


const vaseGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.5, 16);
const vaseMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); 
const vase = new THREE.Mesh(vaseGeometry, vaseMaterial);
vase.position.set(-4.7, 0.1, -1);
scene.add(vase);


const rugGeometry = new THREE.PlaneGeometry(3, 3, 10, 10);
const rugMaterial = new THREE.MeshBasicMaterial({ color: 0xA52A2A }); 
const rug = new THREE.Mesh(rugGeometry, rugMaterial);
rug.rotation.x = -Math.PI / 2;
rug.position.set(-2, 0.01, -2.5);
scene.add(rug);

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
