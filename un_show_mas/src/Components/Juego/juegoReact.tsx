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

        // Cubo (jugador)
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

        // Obstáculo
        const obstacle = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        obstacle.position.set(0, 1, -10);
        scene.add(obstacle);

        // Variables de salto y movimiento
        let velocityY = 0;
        let isJumping = false;
        const gravity = -0.01;
        const jumpStrength = 0.2;
        const groundY = 1;
        let moveLeft = false;
        let moveRight = false;
        const moveSpeed = 0.1;

        // Eventos de teclado
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.code === "Space" || event.key === " ") && !isJumping) {
                velocityY = jumpStrength;
                isJumping = true;
            }
            if (event.code === "ArrowLeft" || event.key === "a") moveLeft = true;
            if (event.code === "ArrowRight" || event.key === "d") moveRight = true;
        };
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.code === "ArrowLeft" || event.key === "a") moveLeft = false;
            if (event.code === "ArrowRight" || event.key === "d") moveRight = false;
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Animación
        let animationId: number;
        let gameOver = false;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Movimiento lateral
            if (moveLeft) cube.position.x -= moveSpeed;
            if (moveRight) cube.position.x += moveSpeed;

            // Limitar movimiento lateral
            cube.position.z = Math.max(-8.5, Math.min(8.5, cube.position.z));

            // Gravedad y salto
            if (cube.position.y > groundY || velocityY > 0) {
                velocityY += gravity;
                cube.position.y += velocityY;
                if (cube.position.y <= groundY) {
                    cube.position.y = groundY;
                    velocityY = 0;
                    isJumping = false;
                }
            }

            // Mover obstáculo hacia el jugador
            obstacle.position.x += 0.1;
            if (obstacle.position.x > 5) {
                // Reiniciar obstáculo
                obstacle.position.x = -10;
                obstacle.position.x = (Math.random() - 0.5) * 16;
            }

            // Detección de colisión simple
            const dx = cube.position.x - obstacle.position.x;
            const dy = cube.position.y - obstacle.position.y;
            const dz = cube.position.z - obstacle.position.z;
            if (
                Math.abs(dx) < 1 &&
                Math.abs(dy) < 1 &&
                Math.abs(dz) < 1
            ) {
                gameOver = true;
            }

            renderer.render(scene, camera);

            if (gameOver) {
                alert("¡Game Over!");
                window.location.reload();
            }
        };
        animate();

        // Limpieza
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            renderer.dispose();
            while (mount.firstChild) {
                mount.removeChild(mount.firstChild);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default GameScene;