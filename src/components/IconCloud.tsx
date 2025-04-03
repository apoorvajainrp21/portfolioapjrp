
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface IconCloudProps {
  icons: string[];
}

const IconCloud: React.FC<IconCloudProps> = ({ icons }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cloudRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 400;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Icon cloud group
    const cloud = new THREE.Group();
    cloudRef.current = cloud;
    scene.add(cloud);

    // Create spherical points
    const createPointsOnSphere = (count: number, radius: number) => {
      const points = [];
      
      for (let i = 0; i < count; i++) {
        // Golden ratio distribution for more even spacing
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const phi = (Math.PI * (3 - Math.sqrt(5))) * i; // Golden angle
        
        const x = Math.cos(phi) * r;
        const z = Math.sin(phi) * r;
        
        points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
      }
      
      return points;
    };

    // Create icons
    const createIcons = async () => {
      const points = createPointsOnSphere(icons.length, 150);
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      
      icons.forEach((icon, index) => {
        // Create text sprite
        const canvas = document.createElement('canvas');
        canvas.width = 150;
        canvas.height = 150;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        ctx.font = 'bold 70px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(icon.substring(0, 2), 75, 75);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(material);
        
        if (points[index]) {
          sprite.position.copy(points[index]);
          sprite.scale.set(30, 30, 1);
          sprite.userData.name = icon;
          cloud.add(sprite);
        }
      });
      
      setLoaded(true);
    };

    createIcons();

    // Handle mouse move
    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = {
        x: (event.clientX - window.innerWidth / 2) * 0.05,
        y: (event.clientY - window.innerHeight / 2) * 0.05
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      if (!cloudRef.current) return;
      
      cloudRef.current.rotation.y += 0.002;
      cloudRef.current.rotation.x += 0.001;
      
      // Apply mouse influence
      cloudRef.current.rotation.y += (mousePositionRef.current.x - cloudRef.current.rotation.y) * 0.01;
      cloudRef.current.rotation.x += (mousePositionRef.current.y - cloudRef.current.rotation.x) * 0.01;
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (cloudRef.current) {
        cloudRef.current.clear();
      }
      
      if (sceneRef.current) {
        while(sceneRef.current.children.length > 0){ 
          sceneRef.current.remove(sceneRef.current.children[0]); 
        }
      }
    };
  }, [icons]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px] relative"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/70">Loading tech stack...</span>
        </div>
      )}
    </div>
  );
};

export default IconCloud;
