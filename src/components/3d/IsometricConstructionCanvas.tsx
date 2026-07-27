import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Play, Pause, RotateCcw, Eye } from 'lucide-react';
import { CaldimLogo } from '../common/CaldimLogo';

interface IsometricConstructionCanvasProps {
  theme?: 'dark' | 'light';
  onPhaseChange?: (phase: number, phaseName: string) => void;
}

const PHASES = [
  { id: 1, name: 'PHASE 1 — SITE PREPARATION', desc: 'Foundation slab setup, engineering grid, tower crane activation, and storage yard layout' },
  { id: 2, name: 'PHASE 2 — CONCRETE PIERS', desc: 'Cast-in-place concrete piers, foundation footings, and anchor bolt clusters' },
  { id: 3, name: 'PHASE 3 — HEAVY STEEL COLUMNS', desc: 'Crane hoisting heavy H-Columns onto anchor bolts, locking column base plates' },
  { id: 4, name: 'PHASE 4 — PRIMARY ROOF TRUSSES', desc: 'Lifting and spanning primary triangular Warren roof trusses over the columns' },
  { id: 5, name: 'PHASE 5 — ROOF PURLINS & BRACING', desc: 'Installing longitudinal Z-purlins, cross sag rods, and lateral wind bracing' },
  { id: 6, name: 'PHASE 6 — METAL DECK & SKYLIGHTS', desc: 'Laying corrugated metal roof decking, insulation sheets, and translucent skylights' },
  { id: 7, name: 'PHASE 7 — COMPLETED ROOFING SYSTEM', desc: 'Large-scale structural roofing complete. Cinematic 360-degree orbital view' }
];

export const IsometricConstructionCanvas: React.FC<IsometricConstructionCanvasProps> = ({
  theme = 'dark',
  onPhaseChange
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [currentPhase, setCurrentPhase] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const width = mountNode.clientWidth || window.innerWidth;
    const height = mountNode.clientHeight || window.innerHeight;

    // 1. Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === 'dark' ? '#05070B' : '#F1F5F9');

    // 2. Camera Setup (Driven dynamically by cameraOrbitObj for cinematic effects)
    const aspect = width / height;
    const d = 22;
    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    
    // Camera orbit parameters (used for the Phase 7 cinematic orbit)
    const cameraOrbitObj = {
      angle: Math.PI / 4,
      radius: 40,
      y: 32,
      lookAtY: 5.5
    };

    const updateCameraPos = () => {
      camera.position.x = Math.sin(cameraOrbitObj.angle) * cameraOrbitObj.radius;
      camera.position.z = Math.cos(cameraOrbitObj.angle) * cameraOrbitObj.radius;
      camera.position.y = cameraOrbitObj.y;
      camera.lookAt(0, cameraOrbitObj.lookAtY, 0);
    };
    updateCameraPos();

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    mountNode.appendChild(renderer.domElement);

    // Procedural Grain Texture Generator for photorealistic bump mapping
    const createNoiseTexture = () => {
      const size = 128;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#888888';
        ctx.fillRect(0, 0, size, size);
        for (let i = 0; i < 3000; i++) {
          const x = Math.random() * size;
          const y = Math.random() * size;
          const val = Math.floor(Math.random() * 40) - 20;
          ctx.fillStyle = `rgb(${128 + val},${128 + val},${128 + val})`;
          ctx.fillRect(x, y, 1.5, 1.5);
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(8, 8);
      return texture;
    };
    const noiseTex = createNoiseTexture();

    // 4. Photorealistic Sunset Lighting Setup
    const ambientLight = new THREE.AmbientLight(theme === 'dark' ? 0x1e293b : 0xf1f5f9, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xf97316, 2.5); // Rich sunset gold/orange
    sunLight.position.set(35, 50, 25);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.near = 5;
    sunLight.shadow.camera.far = 160;
    sunLight.shadow.bias = -0.0001;
    const shadowD = 38;
    sunLight.shadow.camera.left = -shadowD;
    sunLight.shadow.camera.right = shadowD;
    sunLight.shadow.camera.top = shadowD;
    sunLight.shadow.camera.bottom = -shadowD;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.8); // Cool blue sky reflection
    rimLight.position.set(-30, 20, -30);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0x7dd3fc, 0x0c4a6e, 0.8);
    scene.add(hemiLight);

    const fillLight = new THREE.DirectionalLight(0xffedd5, 1.2);
    fillLight.position.set(10, 15, 35);
    scene.add(fillLight);

    // 5. Materials System (Industrial Galvanized Steel & Concrete)
    const matGround = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x090b10 : 0xe2e8f0,
      roughness: 0.9,
      bumpMap: noiseTex,
      bumpScale: 0.02
    });

    const matConcrete = new THREE.MeshStandardMaterial({
      color: theme === 'dark' ? 0x334155 : 0xcbd5e1,
      roughness: 0.65,
      metalness: 0.15,
      bumpMap: noiseTex,
      bumpScale: 0.04
    });

    const matSteelCol = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Silver Galvanized Steel
      metalness: 0.92,
      roughness: 0.22,
      bumpMap: noiseTex,
      bumpScale: 0.008
    });

    const matSteelGirder = new THREE.MeshStandardMaterial({
      color: 0x475569, // Dark Grey Steel
      metalness: 0.92,
      roughness: 0.24,
      bumpMap: noiseTex,
      bumpScale: 0.008
    });

    const matBracing = new THREE.MeshStandardMaterial({
      color: 0x334155, // Anthracite Steel
      metalness: 0.9,
      roughness: 0.26,
      bumpMap: noiseTex,
      bumpScale: 0.008
    });

    const matCrane = new THREE.MeshStandardMaterial({
      color: 0xeab308, // Crane Safety Yellow
      metalness: 0.6,
      roughness: 0.35
    });

    const matGrating = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark Grated Steel
      roughness: 0.5,
      metalness: 0.85,
      bumpMap: noiseTex,
      bumpScale: 0.015
    });

    const matGlass = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
      transmission: 0.9,
      roughness: 0.05,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });

    // Helper: Create flanged I-Beam group
    const createIBeam = (length: number, width: number, height: number, material: THREE.Material) => {
      const group = new THREE.Group();
      const flangeThick = height * 0.15;
      const webThick = width * 0.2;

      // Top flange
      const topGeo = new THREE.BoxGeometry(length, flangeThick, width);
      const top = new THREE.Mesh(topGeo, material);
      top.position.y = (height - flangeThick) / 2;
      top.castShadow = true;
      top.receiveShadow = true;
      group.add(top);

      // Bottom flange
      const bottom = new THREE.Mesh(topGeo, material);
      bottom.position.y = -(height - flangeThick) / 2;
      bottom.castShadow = true;
      bottom.receiveShadow = true;
      group.add(bottom);

      // Center web
      const webGeo = new THREE.BoxGeometry(length, height - flangeThick * 2, webThick);
      const web = new THREE.Mesh(webGeo, material);
      web.castShadow = true;
      web.receiveShadow = true;
      group.add(web);

      return group;
    };

    // Helper: Create H-Column with connection plates
    const createHColumn = (height: number, size: number, material: THREE.Material) => {
      const group = new THREE.Group();
      const beam = createIBeam(height, size, size, material);
      beam.rotation.z = Math.PI / 2;
      group.add(beam);

      // Base plate
      const plateGeo = new THREE.BoxGeometry(size * 1.6, 0.15, size * 1.6);
      const basePlate = new THREE.Mesh(plateGeo, material);
      basePlate.position.y = -height / 2;
      basePlate.castShadow = true;
      group.add(basePlate);

      // Top splice plate
      const topPlate = new THREE.Mesh(plateGeo, material);
      topPlate.position.y = height / 2;
      topPlate.castShadow = true;
      group.add(topPlate);

      return group;
    };

    // Helper: Create Crane Lattice Mast Structure
    const createLatticeMast = (height: number, width: number, material: THREE.Material) => {
      const group = new THREE.Group();
      // 4 vertical corner posts
      const postGeo = new THREE.BoxGeometry(0.12, height, 0.12);
      const offsets = [-width/2, width/2];
      offsets.forEach((ox) => {
        offsets.forEach((oz) => {
          const post = new THREE.Mesh(postGeo, material);
          post.position.set(ox, height/2, oz);
          post.castShadow = true;
          group.add(post);
        });
      });
      // Diagonal cross bracings along the height
      const numBays = Math.floor(height / width);
      const bayHeight = height / numBays;
      for (let i = 0; i < numBays; i++) {
        const by = i * bayHeight + bayHeight / 2;
        const diagGeo = new THREE.BoxGeometry(0.08, Math.sqrt(width*width + bayHeight*bayHeight), 0.08);
        const rotZ = Math.atan2(width, bayHeight);
        
        // Front diagonal 1
        const d1 = new THREE.Mesh(diagGeo, material);
        d1.position.set(0, by, width/2);
        d1.rotation.z = rotZ;
        group.add(d1);

        // Front diagonal 2
        const d2 = new THREE.Mesh(diagGeo, material);
        d2.position.set(0, by, width/2);
        d2.rotation.z = -rotZ;
        group.add(d2);

        // Side diagonal 1
        const d3 = new THREE.Mesh(diagGeo, material);
        d3.position.set(width/2, by, 0);
        d3.rotation.x = rotZ;
        group.add(d3);

        // Side diagonal 2
        const d4 = new THREE.Mesh(diagGeo, material);
        d4.position.set(width/2, by, 0);
        d4.rotation.x = -rotZ;
        group.add(d4);
      }
      return group;
    };

    // 6. Build Scene Objects
    const siteGroup = new THREE.Group();
    scene.add(siteGroup);

    // Site Ground Slab
    const groundGeo = new THREE.BoxGeometry(45, 0.8, 45);
    const ground = new THREE.Mesh(groundGeo, matGround);
    ground.position.y = -0.4;
    ground.receiveShadow = true;
    siteGroup.add(ground);

    // Blueprint Grid Overlay (Subtle)
    const gridHelper = new THREE.GridHelper(44, 22, 0x0084ff, 0x334155);
    gridHelper.position.y = 0.02;
    if (gridHelper.material instanceof THREE.Material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.35;
    }
    siteGroup.add(gridHelper);

    // Foundation Slab (Concrete Working Pad)
    const foundationSlabGeo = new THREE.BoxGeometry(24, 0.4, 18);
    const foundationSlab = new THREE.Mesh(foundationSlabGeo, matConcrete);
    foundationSlab.position.set(0, 0.2, 0);
    foundationSlab.receiveShadow = true;
    siteGroup.add(foundationSlab);

    // Material Storage Area
    const yardGroup = new THREE.Group();
    yardGroup.position.set(13, 0.05, -13);
    siteGroup.add(yardGroup);

    const yardGeo = new THREE.BoxGeometry(8, 0.1, 8);
    const yardMesh = new THREE.Mesh(yardGeo, matConcrete);
    yardMesh.receiveShadow = true;
    yardGroup.add(yardMesh);

    // 7. Tower Crane Model (Lattice Mast)
    const craneGroup = new THREE.Group();
    craneGroup.position.set(-15, 0, -15);
    siteGroup.add(craneGroup);

    const mastGroup = createLatticeMast(30, 1.6, matCrane);
    craneGroup.add(mastGroup);

    const jibGroup = new THREE.Group();
    jibGroup.position.y = 29;
    craneGroup.add(jibGroup);

    // Lattice Jib
    const jibFront = createLatticeMast(32, 1.2, matCrane);
    jibFront.rotation.z = -Math.PI / 2; // Horizontal extension
    jibFront.position.set(0, 0.6, 0);
    jibGroup.add(jibFront);

    const jibBackGeo = new THREE.BoxGeometry(10, 1.2, 1.2);
    const jibBack = new THREE.Mesh(jibBackGeo, matCrane);
    jibBack.position.x = -5;
    jibBack.castShadow = true;
    jibGroup.add(jibBack);

    const counterWeightGeo = new THREE.BoxGeometry(3, 2, 2.4);
    const counterWeight = new THREE.Mesh(counterWeightGeo, matConcrete);
    counterWeight.position.set(-8, 0, 0);
    counterWeight.castShadow = true;
    jibGroup.add(counterWeight);

    const trolleyMeshGeo = new THREE.BoxGeometry(1.4, 0.5, 1.4);
    const trolleyMesh = new THREE.Mesh(trolleyMeshGeo, matSteelGirder);
    trolleyMesh.position.set(12, -0.65, 0);
    jibGroup.add(trolleyMesh);

    const cableGeo = new THREE.CylinderGeometry(0.04, 0.04, 15, 8);
    const cable = new THREE.Mesh(cableGeo, matSteelGirder);
    cable.position.y = -7.5;
    trolleyMesh.add(cable);

    const hookGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const hook = new THREE.Mesh(hookGeo, matBracing);
    hook.position.y = -15;
    trolleyMesh.add(hook);

    // 8. Large-Scale Roofing System Structural Members
    const roofingSystemGroup = new THREE.Group();
    siteGroup.add(roofingSystemGroup);

    // Foundations (6 concrete pedestals)
    const footingPositions = [
      { x: -9, z: -6 }, { x: -9, z: 0 }, { x: -9, z: 6 },
      { x: 9, z: -6 },  { x: 9, z: 0 },  { x: 9, z: 6 }
    ];

    const footings: THREE.Mesh[] = [];
    footingPositions.forEach((pos) => {
      const fGeo = new THREE.BoxGeometry(2.2, 1.2, 2.2);
      const fMesh = new THREE.Mesh(fGeo, matConcrete);
      fMesh.position.set(pos.x, -0.6, pos.z);
      fMesh.castShadow = true;
      fMesh.receiveShadow = true;
      roofingSystemGroup.add(fMesh);
      footings.push(fMesh);
    });

    // Anchor Bolt Clusters (4 per footing)
    const anchorBolts: THREE.Mesh[] = [];
    footingPositions.forEach((pos) => {
      const boltGroup = new THREE.Group();
      boltGroup.position.set(pos.x, 0.0, pos.z);
      boltGroup.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(boltGroup);

      const dxz = [
        { dx: -0.5, dz: -0.5 }, { dx: -0.5, dz: 0.5 },
        { dx: 0.5, dz: -0.5 },  { dx: 0.5, dz: 0.5 }
      ];

      dxz.forEach((offset) => {
        const bGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8);
        const bMesh = new THREE.Mesh(bGeo, matBracing);
        bMesh.position.set(offset.dx, 0.4, offset.dz);
        bMesh.castShadow = true;
        boltGroup.add(bMesh);
      });

      anchorBolts.push(boltGroup as any);
    });

    // Heavy Steel Columns (6 H-Columns, height = 8.0)
    const columns: THREE.Group[] = [];
    footingPositions.forEach((pos) => {
      const col = createHColumn(8.0, 0.7, matSteelCol);
      col.position.set(pos.x, 4.6, pos.z);
      col.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(col);
      columns.push(col);
    });

    // --- PRIMARY ROOF TRUSSES (3 large triangular Warren trusses, span = 18.0) ---
    // Truss Bottom Chords (3 horizontal spanning I-beams at y = 8.75)
    const trussBottoms: THREE.Group[] = [];
    const trussZPositions = [-6, 0, 6];
    trussZPositions.forEach((posZ) => {
      const chord = createIBeam(18.0, 0.6, 0.7, matSteelGirder);
      chord.position.set(0, 8.75, posZ);
      chord.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(chord);
      trussBottoms.push(chord);
    });

    // Truss Top Chords Left (3 inclined members rising to the ridge at x = 0, y = 11.75)
    const trussLeftChords: THREE.Group[] = [];
    const slopeAngle = Math.atan2(3.0, 9.0); // rise 3, run 9
    const slopeLength = Math.sqrt(9.0*9.0 + 3.0*3.0); // 9.48

    trussZPositions.forEach((posZ) => {
      const leftChord = createIBeam(slopeLength, 0.45, 0.55, matSteelGirder);
      leftChord.position.set(-4.5, 10.25, posZ);
      leftChord.rotation.z = slopeAngle;
      leftChord.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(leftChord);
      trussLeftChords.push(leftChord);
    });

    // Truss Top Chords Right (3 inclined members)
    const trussRightChords: THREE.Group[] = [];
    trussZPositions.forEach((posZ) => {
      const rightChord = createIBeam(slopeLength, 0.45, 0.55, matSteelGirder);
      rightChord.position.set(4.5, 10.25, posZ);
      rightChord.rotation.z = -slopeAngle;
      rightChord.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(rightChord);
      trussRightChords.push(rightChord);
    });

    // Truss Internal Web Members (Struts & Diagonals, 21 posts)
    const trussWebs: THREE.Mesh[] = [];
    trussZPositions.forEach((posZ) => {
      // Verticals at x = -4.5, 0, 4.5
      const vHeights = [1.5, 3.0, 1.5];
      const vOffsets = [-4.5, 0, 4.5];
      vOffsets.forEach((ox, idx) => {
        const h = vHeights[idx];
        const vGeo = new THREE.CylinderGeometry(0.12, 0.12, h, 8);
        const vMesh = new THREE.Mesh(vGeo, matBracing);
        vMesh.position.set(ox, 8.75 + h/2, posZ);
        vMesh.castShadow = true;
        vMesh.scale.set(0.001, 0.001, 0.001);
        roofingSystemGroup.add(vMesh);
        trussWebs.push(vMesh);
      });

      // Diagonals forming triangular Warren structure
      const d1Geo = new THREE.CylinderGeometry(0.1, 0.1, 4.74, 8); // length of diagonal between verticals
      
      const d1 = new THREE.Mesh(d1Geo, matBracing);
      d1.position.set(-6.75, 9.5, posZ);
      d1.rotation.z = Math.atan2(1.5, 4.5);
      d1.castShadow = true;
      d1.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(d1);
      trussWebs.push(d1);

      const d2 = new THREE.Mesh(d1Geo, matBracing);
      d2.position.set(-2.25, 10.25, posZ);
      d2.rotation.z = -Math.atan2(1.5, 4.5);
      d2.castShadow = true;
      d2.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(d2);
      trussWebs.push(d2);

      const d3 = new THREE.Mesh(d1Geo, matBracing);
      d3.position.set(2.25, 10.25, posZ);
      d3.rotation.z = Math.atan2(1.5, 4.5);
      d3.castShadow = true;
      d3.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(d3);
      trussWebs.push(d3);

      const d4 = new THREE.Mesh(d1Geo, matBracing);
      d4.position.set(6.75, 9.5, posZ);
      d4.rotation.z = -Math.atan2(1.5, 4.5);
      d4.castShadow = true;
      d4.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(d4);
      trussWebs.push(d4);
    });

    // --- ROOF PURLINS (9 longitudinal members running along Z-axis) ---
    const purlins: THREE.Group[] = [];
    const purlinOffsets = [-9, -6.75, -4.5, -2.25, 0, 2.25, 4.5, 6.75, 9];
    purlinOffsets.forEach((offsetX) => {
      const pct = 1 - Math.abs(offsetX) / 9; // slope percent (1 at center, 0 at ends)
      const offsetY = 8.75 + pct * 3.0 + 0.15; // resting cleanly on top chords

      const p = createIBeam(12.4, 0.25, 0.3, matSteelCol);
      p.rotation.y = Math.PI / 2; // Span along Z
      p.position.set(offsetX, offsetY, 0); // Spanning z = -6 to z = 6 (length 12)
      p.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(p);
      purlins.push(p);
    });

    // Purlin wind bracing / sag rods (diagonal ties between purlins)
    const windBracing: THREE.Mesh[] = [];
    [-4.5, 4.5].forEach((bx) => {
      const wbGeo = new THREE.BoxGeometry(0.06, 12.4, 0.06);
      
      const wb1 = new THREE.Mesh(wbGeo, matBracing);
      wb1.position.set(bx, 10.4, 0);
      wb1.rotation.y = Math.PI / 2;
      wb1.rotation.z = Math.atan2(9, 12);
      wb1.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(wb1);
      windBracing.push(wb1);

      const wb2 = new THREE.Mesh(wbGeo, matBracing);
      wb2.position.set(bx, 10.4, 0);
      wb2.rotation.y = Math.PI / 2;
      wb2.rotation.z = -Math.atan2(9, 12);
      wb2.scale.set(0.001, 0.001, 0.001);
      roofingSystemGroup.add(wb2);
      windBracing.push(wb2);
    });

    // --- ROOF METAL DECKING PANELS (4 corrugated roof sheets) ---
    const roofDeckGroup = new THREE.Group();
    roofingSystemGroup.add(roofDeckGroup);

    const deckPanels: THREE.Mesh[] = [];
    const deckSpecs = [
      // Left Slope Panels
      { x: -6.75, y: 9.5, rotZ: slopeAngle },
      { x: -2.25, y: 11.0, rotZ: slopeAngle },
      // Right Slope Panels
      { x: 2.25, y: 11.0, rotZ: -slopeAngle },
      { x: 6.75, y: 9.5, rotZ: -slopeAngle }
    ];

    deckSpecs.forEach((spec, idx) => {
      const panelGeo = new THREE.BoxGeometry(4.6, 0.08, 12.4);
      const panel = new THREE.Mesh(panelGeo, matGrating);
      panel.position.set(spec.x, spec.y + 0.35, 0);
      panel.rotation.z = spec.rotZ;
      panel.castShadow = true;
      panel.receiveShadow = true;
      panel.scale.set(0.001, 0.001, 0.001);
      roofDeckGroup.add(panel);
      deckPanels.push(panel);
    });

    // --- TRANSLUCENT RIDGE SKYLIGHTS ---
    const skylightsGroup = new THREE.Group();
    roofingSystemGroup.add(skylightsGroup);

    const skylightGeo = new THREE.BoxGeometry(1.8, 0.1, 12.4);
    const skylightMesh = new THREE.Mesh(skylightGeo, matGlass);
    skylightMesh.position.set(0, 11.75 + 0.1, 0);
    skylightMesh.castShadow = true;
    skylightMesh.scale.set(0.001, 0.001, 0.001);
    skylightsGroup.add(skylightMesh);

    // Gusset plates & structural bolt details
    const junctions = new THREE.Group();
    junctions.scale.set(0.001, 0.001, 0.001);
    roofingSystemGroup.add(junctions);

    footingPositions.forEach((pos) => {
      const plateGeo = new THREE.BoxGeometry(0.9, 0.9, 0.12);
      const plate = new THREE.Mesh(plateGeo, matBracing);
      plate.position.set(pos.x, 8.6, pos.z);
      plate.rotation.y = Math.PI / 2;
      plate.castShadow = true;
      junctions.add(plate);

      // 4 bolts per junction plate
      const boltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.25, 6);
      [-0.25, 0.25].forEach((dx) => {
        [-0.25, 0.25].forEach((dy) => {
          const bolt = new THREE.Mesh(boltGeo, matSteelCol);
          bolt.rotation.x = Math.PI / 2;
          bolt.position.set(pos.x + dx, 8.6 + dy, pos.z);
          junctions.add(bolt);
        });
      });
    });

    // 9. GSAP Timeline Animations Helper (Handles Realistic Crane Trajectory)
    const animateRealisticLift = (
      mesh: THREE.Object3D,
      targetPos: THREE.Vector3,
      targetRot: THREE.Euler,
      startTime: number
    ) => {
      // Initialize mesh at storage area yard: (13, 1.0, -13) with variance
      mesh.position.set(13 + (Math.random() * 2 - 1), 1.0, -13 + (Math.random() * 2 - 1));
      mesh.rotation.set(0, Math.random() * Math.PI, 0);
      mesh.scale.set(0.001, 0.001, 0.001);

      // A. Swing jib to storage area and position trolley
      tl.to(jibGroup.rotation, { y: -Math.PI * 0.45, duration: 0.45, ease: 'power1.inOut' }, startTime);
      tl.to(trolleyMesh.position, { x: 17.5, duration: 0.45, ease: 'power1.inOut' }, startTime);
      
      // B. Attach hook to member, lift it high
      tl.to(mesh.scale, { x: 1, y: 1, z: 1, duration: 0.15 }, startTime + 0.45);
      tl.to(mesh.position, { y: 15, duration: 0.4, ease: 'power1.out' }, startTime + 0.45);

      // D. Rotate jib and trolley to position over target
      const dx = targetPos.x - (-15);
      const dz = targetPos.z - (-15);
      const targetAngle = -Math.atan2(dz, dx);
      const targetDist = Math.sqrt(dx * dx + dz * dz);

      tl.to(jibGroup.rotation, { y: targetAngle, duration: 0.6, ease: 'power1.inOut' }, startTime + 0.85);
      tl.to(trolleyMesh.position, { x: targetDist, duration: 0.6, ease: 'power1.inOut' }, startTime + 0.85);
      
      tl.to(mesh.position, { x: targetPos.x, z: targetPos.z, duration: 0.6, ease: 'power1.inOut' }, startTime + 0.85);
      tl.to(mesh.rotation, { x: targetRot.x, y: targetRot.y, z: targetRot.z, duration: 0.5, ease: 'power1.inOut' }, startTime + 0.95);

      // E. Lower into final alignment with a slight settling bounce
      tl.to(mesh.position, { y: targetPos.y, duration: 0.5, ease: 'back.out(1.2)' }, startTime + 1.45);
    };

    // 10. GSAP 7-Phase Master Timeline Definition (Total 42s duration)
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 5.0, // 5 seconds pause on completion
      onUpdate: () => {
        const time = tl.time();
        let phase = 1;
        if (time >= 3) phase = 2;
        if (time >= 7) phase = 3;
        if (time >= 15) phase = 4;
        if (time >= 25) phase = 5;
        if (time >= 29) phase = 6;
        if (time >= 34) phase = 7;

        setCurrentPhase(phase);
        if (onPhaseChange) onPhaseChange(phase, PHASES[phase - 1].name);
      }
    });
    masterTimelineRef.current = tl;

    // --- PHASE 1: SITE PREPARATION (0s - 3s) ---
    tl.to(cameraOrbitObj, {
      angle: Math.PI / 4 + 0.1,
      radius: 38,
      duration: 3,
      ease: 'power1.inOut'
    }, 0);

    tl.to(jibGroup.rotation, {
      y: Math.PI * 0.4,
      duration: 3,
      ease: 'power1.inOut'
    }, 0);

    // --- PHASE 2: CONCRETE PIERS (3s - 7s) ---
    footings.forEach((f, i) => {
      // Concrete pours naturally: scale from bottom
      const startPos = f.position.y;
      f.position.y = -1.2;
      f.scale.y = 0.001;

      tl.to(f.scale, {
        y: 1,
        duration: 1.2,
        ease: 'power1.out'
      }, 3.0 + i * 0.4);

      tl.to(f.position, {
        y: startPos,
        duration: 1.2,
        ease: 'power1.out'
      }, 3.0 + i * 0.4);
    });

    anchorBolts.forEach((ab, i) => {
      tl.to(ab.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      }, 4.6 + i * 0.3);
    });

    // --- PHASE 3: HEAVY STEEL COLUMNS (7s - 15s) ---
    columns.forEach((col, i) => {
      const specPos = footingPositions[i];
      animateRealisticLift(
        col,
        new THREE.Vector3(specPos.x, 4.6, specPos.z),
        new THREE.Euler(0, 0, 0),
        7.0 + i * 1.3
      );
    });

    // --- PHASE 4: PRIMARY ROOF TRUSSES (15s - 25s) ---
    // Truss bottom chords
    trussBottoms.forEach((chord, i) => {
      const posZ = trussZPositions[i];
      animateRealisticLift(
        chord,
        new THREE.Vector3(0, 8.75, posZ),
        new THREE.Euler(0, 0, 0),
        15.0 + i * 1.5
      );
    });

    // Truss left top chords
    trussLeftChords.forEach((leftChord, i) => {
      const posZ = trussZPositions[i];
      animateRealisticLift(
        leftChord,
        new THREE.Vector3(-4.5, 10.25, posZ),
        new THREE.Euler(0, 0, slopeAngle),
        18.0 + i * 1.0
      );
    });

    // Truss right top chords
    trussRightChords.forEach((rightChord, i) => {
      const posZ = trussZPositions[i];
      animateRealisticLift(
        rightChord,
        new THREE.Vector3(4.5, 10.25, posZ),
        new THREE.Euler(0, 0, -slopeAngle),
        21.0 + i * 1.0
      );
    });

    // Truss internal web struts snap in together
    trussWebs.forEach((web, i) => {
      tl.to(web.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.4,
        ease: 'back.out(1.2)'
      }, 23.5 + (i * 0.05));
    });

    // --- PHASE 5: ROOF PURLINS & BRACING (25s - 29s) ---
    // Longitudinal Z-purlins
    purlins.forEach((p, i) => {
      const offsetX = purlinOffsets[i];
      const pct = 1 - Math.abs(offsetX) / 9;
      const offsetY = 8.75 + pct * 3.0 + 0.15;
      animateRealisticLift(
        p,
        new THREE.Vector3(offsetX, offsetY, 0),
        new THREE.Euler(0, Math.PI / 2, 0),
        25.0 + i * 0.35
      );
    });

    // Wind bracing rods snap in
    windBracing.forEach((wb, i) => {
      tl.to(wb.scale, {
        x: 1, y: 1, z: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      }, 27.5 + i * 0.3);
    });

    // Structural bolt junctions
    tl.to(junctions.scale, {
      x: 1, y: 1, z: 1,
      duration: 0.6,
      ease: 'back.out(1.5)'
    }, 28.5);

    // --- PHASE 6: METAL DECK & SKYLIGHTS (29s - 34s) ---
    // Corrugated metal decking panels slide into alignment
    deckPanels.forEach((panel, i) => {
      const spec = deckSpecs[i];
      tl.to(panel.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'power2.out' }, 29.0 + i * 0.8);
    });

    // Translucent ridge skylights drop in
    tl.to(skylightMesh.scale, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.2)' }, 32.5);

    // --- PHASE 7: COMPLETED ROOFING SYSTEM (34s - 42s) ---
    // Fade grid helper blueprint lines
    if (gridHelper.material instanceof THREE.Material) {
      tl.to(gridHelper.material, { opacity: 0.08, duration: 1.5 }, 34.0);
    }
    tl.to(yardGroup.scale, { x: 0, y: 0, z: 0, duration: 1.0 }, 34.0);

    // Morph matte visualizer materials into highly metallic PBR materials
    tl.to(matSteelCol, { color: 0x94a3b8, metalness: 0.95, roughness: 0.15, duration: 1.8 }, 34.0);
    tl.to(matSteelGirder, { color: 0x475569, metalness: 0.95, roughness: 0.18, duration: 1.8 }, 34.0);
    tl.to(matBracing, { color: 0x334155, metalness: 0.9, roughness: 0.22, duration: 1.8 }, 34.0);

    // Slow orbital camera flight and zoom
    tl.to(cameraOrbitObj, {
      angle: Math.PI / 4 + Math.PI * 2.0, // Full 360 orbit
      radius: 30, // Zoom in closer
      y: 18, // Drop down closer to eye-level
      lookAtY: 7.5,
      duration: 6.0,
      ease: 'sine.inOut'
    }, 34.2);

    // Reset camera positions back to default isometric coordinates for the next loop
    tl.to(cameraOrbitObj, {
      angle: Math.PI / 4,
      radius: 40,
      y: 32,
      lookAtY: 5.5,
      duration: 1.5,
      ease: 'power2.inOut'
    }, 40.5);

    // 11. Main Render Loop
    let animId: number;
    const animate = () => {
      updateCameraPos();
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mountNode) return;
      const w = mountNode.clientWidth || window.innerWidth;
      const h = mountNode.clientHeight || window.innerHeight;
      const asp = w / h;
      camera.left = -d * asp;
      camera.right = d * asp;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (masterTimelineRef.current) masterTimelineRef.current.kill();
      renderer.dispose();
      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, [theme, onPhaseChange]);

  const togglePlayPause = () => {
    if (!masterTimelineRef.current) return;
    if (isPlaying) {
      masterTimelineRef.current.pause();
    } else {
      masterTimelineRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = () => {
    if (masterTimelineRef.current) {
      masterTimelineRef.current.restart();
      setIsPlaying(true);
    }
  };

  const activePhaseInfo = PHASES[currentPhase - 1] || PHASES[0];

  return (
    <div className="relative w-full h-full min-h-[540px] rounded-3xl overflow-hidden bg-[#05070B] border border-[#0084FF]/30 shadow-2xl">
      <div ref={mountRef} className="w-full h-full min-h-[540px] block" />

      {/* Floating HUD Header */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none z-10">
        <div className="flex items-center gap-3 pointer-events-auto bg-[#0B1118]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#0084FF]/40 shadow-xl glow-box-cyan">
          <span className="w-3 h-3 rounded-full bg-[#0084FF] animate-ping" />
          <div>
            <span className="font-numbers text-xs text-[#0084FF] font-bold tracking-wider block">
              {activePhaseInfo.name}
            </span>
            <span className="font-body text-[11px] text-[#8C99A5]">
              {activePhaseInfo.desc}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 pointer-events-auto bg-[#0B1118]/80 backdrop-blur-md px-3 py-2 rounded-2xl border border-[#8C99A5]/20">
          {PHASES.map((p) => (
            <div
              key={p.id}
              className={`w-7 h-7 rounded-lg font-numbers text-xs flex items-center justify-center transition-all ${
                currentPhase === p.id
                  ? 'bg-[#0084FF] text-white font-bold scale-110 shadow-[0_0_10px_#0084FF]'
                  : currentPhase > p.id
                  ? 'bg-[#4F46E5]/40 text-white'
                  : 'bg-[#0B1118] text-[#8C99A5] opacity-60'
              }`}
              title={p.name}
            >
              {p.id}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-xl bg-[#0B1118]/90 border border-[#0084FF]/40 text-[#0084FF] hover:bg-[#0084FF] hover:text-white transition-all shadow-lg"
            title={isPlaying ? 'Pause Animation' : 'Play Animation'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <button
            onClick={handleRestart}
            className="p-3 rounded-xl bg-[#0B1118]/90 border border-[#8C99A5]/30 text-[#8C99A5] hover:text-[#0084FF] hover:border-[#0084FF] transition-all shadow-lg"
            title="Restart Animation Sequence"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <div className="font-numbers text-xs text-[#0084FF] bg-[#0B1118]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#0084FF]/30 pointer-events-auto flex items-center gap-2">
          <CaldimLogo className="w-4 h-3.5 text-[#0084FF]" />
          3D STEEL STRUCTURE CRANE BUILD
        </div>
      </div>
    </div>
  );
};
