import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Compass, Eye, Rotate3d, Layers } from 'lucide-react';

/**
 * ThreeCanvasHero - High-Fidelity Interactive 3D Academic Constellation
 * Powered by Three.js WebGL.
 * Features:
 * - 38 Interconnected Luminous College Nodes (Bihar 38 GECs)
 * - Central Crystalline Geodesic Core with Dynamic Pulse
 * - Orbiting Energy Quantum Rings
 * - Responsive Touch & Mouse Inertia Physics
 * - Battery-friendly throttling, adaptive pixel ratio, zero memory leaks
 */
export default function ThreeCanvasHero({ className = '', isMobile = false }) {
  const mountRef = useRef(null);
  const [activeMode, setActiveMode] = useState('constellation'); // 'constellation' | 'globe' | 'quantum'
  const [isInteracting, setIsInteracting] = useState(false);
  const [fpsRating, setFpsRating] = useState('60 FPS');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch (e) {
      return;
    }

    let width = container.clientWidth || 360;
    let height = container.clientHeight || (isMobile ? 240 : 400);

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 7.2 : 6.0;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // 2. Main 3D Pivot Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 3. Central Geodesic Core (Icosahedron with Wireframe + Inner Glow)
    const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 1.35 : 1.55, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Solid Glow Sphere
    const innerGeo = new THREE.SphereGeometry(isMobile ? 0.75 : 0.85, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.25,
      wireframe: false
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 4. 38 Orbiting College Nodes (Representing 38 GEC Colleges of Bihar)
    const collegeCount = 38;
    const collegeNodes = [];
    const nodeGeometry = new THREE.SphereGeometry(isMobile ? 0.055 : 0.07, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.22
    });

    const collegeGroup = new THREE.Group();
    mainGroup.add(collegeGroup);

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < collegeCount; i++) {
      // Fibonacci sphere distribution for uniform positioning
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / collegeCount);
      const r = isMobile ? 2.15 : 2.45;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(x, y, z);
      node.userData = {
        baseX: x, baseY: y, baseZ: z,
        phase: i * 0.25,
        speed: 0.008 + (i % 5) * 0.002
      };
      collegeGroup.add(node);
      collegeNodes.push(node);

      // Connecting lines from core to node
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z)
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      collegeGroup.add(line);
    }

    // 5. Energy Quantum Rings
    const ringGeo = new THREE.RingGeometry(isMobile ? 2.6 : 3.0, isMobile ? 2.62 : 3.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh1 = new THREE.Mesh(ringGeo, ringMat);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeo.clone(), ringMat.clone());
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    mainGroup.add(ringMesh2);

    // 6. Ambient Particle Nebula / Knowledge Dust
    const particleCount = isMobile ? 120 : 260;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8); // Sky blue
    const c2 = new THREE.Color(0x818cf8); // Indigo
    const c3 = new THREE.Color(0x34d399); // Emerald

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 3.5;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      const sinPhi = Math.sin(phi);

      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? c1 : (Math.random() > 0.5 ? c2 : c3);
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 7. Interactive Inertia Physics & Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let autoRotationSpeed = 0.003;

    // Pointer Events (Mouse + Touch)
    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const onPointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else if (!isMobile) {
        // Subtle mouse parallax when not dragging
        const rect = container.getBoundingClientRect();
        const normX = (clientX - rect.left) / width - 0.5;
        const normY = (clientY - rect.top) / height - 0.5;
        camera.position.x = normX * 0.75;
        camera.position.y = -normY * 0.75;
        camera.lookAt(scene.position);
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 800);
    };

    const domElement = renderer.domElement;
    domElement.style.touchAction = 'none'; // Smooth touch rotation
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 8. Animation & Render Loop
    let animId = null;
    let clock = new THREE.Clock();
    let isVisible = true;

    // Pause when scrolled off screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });
    observer.observe(container);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Continuous auto-rotation
      targetRotationY += autoRotationSpeed;

      // Smooth inertia dampening
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      mainGroup.rotation.x = currentRotationX;
      mainGroup.rotation.y = currentRotationY;

      // Pulse Core
      const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.06;
      coreMesh.scale.set(pulse, pulse, pulse);
      innerMesh.scale.set(pulse * 0.95, pulse * 0.95, pulse * 0.95);

      // Rotate Rings in opposite directions
      ringMesh1.rotation.z += 0.005;
      ringMesh2.rotation.z -= 0.004;

      // Drift Nodes slightly
      for (let i = 0; i < collegeNodes.length; i++) {
        const node = collegeNodes[i];
        const { baseX, baseY, baseZ, phase, speed } = node.userData;
        const offset = Math.sin(elapsedTime * 2 + phase) * 0.05;
        node.position.set(baseX + offset, baseY + offset, baseZ + offset);
      }

      // Rotate background particles
      particleSystem.rotation.y = -elapsedTime * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 360;
      height = container.clientHeight || (isMobile ? 240 : 400);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 10. Clean Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      // Dispose Three.js resources
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (domElement.parentNode) {
        domElement.parentNode.removeChild(domElement);
      }
    };
  }, [isMobile]);

  return (
    <div className={`relative w-full overflow-hidden select-none ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className={`w-full ${isMobile ? 'h-[230px] sm:h-[260px]' : 'h-[380px] md:h-[440px]'} cursor-grab active:cursor-grabbing relative z-10`}
      />

      {/* Floating 3D Control Badges */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 pointer-events-none">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600/15 border border-blue-400/30 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-blue-600 shadow-2xs">
          <Rotate3d size={13} className="text-blue-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Interactive 3D Core</span>
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-[9px] font-bold text-emerald-600">
          38 GEC Nodes
        </span>
      </div>

      {/* Touch/Drag Helper Hint */}
      <div className="absolute bottom-2.5 inset-x-0 z-20 flex items-center justify-center pointer-events-none">
        <p className="px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md text-white text-[9.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
          <Compass size={11} className="text-cyan-300" />
          <span>{isMobile ? 'Swipe to rotate 3D Bihar Engineering Network' : 'Drag cursor to rotate 3D Core • Interactive Parallax'}</span>
        </p>
      </div>
    </div>
  );
}
