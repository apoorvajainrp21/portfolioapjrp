
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Create wave geometry
    const geometry = new THREE.PlaneGeometry(100, 60, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 3;
    scene.add(waves);
    camera.position.z = 30;
    
    // Animate waves
    const positions = geometry.attributes.position.array as Float32Array;
    const initialPositions = Array.from(positions);
    
    const animate = () => {
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = initialPositions[i];
        const y = initialPositions[i + 1];
        // Apply wave effect based on position and time
        const z = Math.sin(x * 0.1 + time) * 2 + Math.sin(y * 0.1 + time) * 2;
        positions[i + 2] = z;
      }
      
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(waves);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-0 relative"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full -z-10" 
        style={{ opacity: 0.6 }}
      />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <h1 className="text-giant mb-8">
              COMPUTER<br/>ENGINEER <span className="text-red-500">+</span><br/>SOFTWARE DEVELOPER
            </h1>
            
            <div className="mt-8 hidden md:block">
              <a href="#education" className="scroll-down-link" aria-label="Scroll down">
                <div className="scroll-indicator"></div>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-white/80 text-lg tracking-wide leading-relaxed">
              Blending hardware expertise with software innovation. From circuit boards to secure code, I love designing and securing technologies that balance resilience with revolution.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex">
        <a 
          href="#education" 
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
