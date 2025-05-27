import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GameScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x202020);

    // Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 2;

    // Render
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    // Luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Cubo
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    cube.position.y = 1;
    scene.add(cube);

    // Piso
    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(20, 1, 10),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );
    floor.position.y = -0.5;
    scene.add(floor);

    // Variables de salto
    let velocityY = 0;
    let isJumping = false;
    const gravity = -0.01;
    const jumpStrength = 0.2;
    const groundY = 1;

    // Evento de teclado
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.code === "Space" || event.key === " ") && !isJumping) {
        velocityY = jumpStrength;
        isJumping = true;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Animación
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Gravedad
      if (cube.position.y > groundY || velocityY > 0) {
        velocityY += gravity;
        cube.position.y += velocityY;

        // Al tocar el suelo
        if (cube.position.y <= groundY) {
          cube.position.y = groundY;
          velocityY = 0;
          isJumping = false;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Limpieza
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyDown);
      renderer.dispose();
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default GameScene;