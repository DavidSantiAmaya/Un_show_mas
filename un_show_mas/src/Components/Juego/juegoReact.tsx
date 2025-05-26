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
        camera.position.x = 0;
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

        const obstacle2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        obstacle2.position.set(0, 1, -10);
        scene.add(obstacle2);

        // Variables de salto y movimiento
        let velocityY = 0;
        let isJumping = false;
        const gravity = -0.01;
        const jumpStrength = 0.2;
        const groundY = 1;
        let moveLeft = false;
        let moveRight = false;
        const moveSpeed = 0.1;

        // Estado de pausa y game over
        let paused = false;
        let gameOver = false;

        // Referencias para actualizar desde botones
        (window as any).__pauseGame = () => { paused = true; };
        (window as any).__resumeGame = () => { paused = false; animate(); };
        (window as any).__restartGame = () => { window.location.reload(); };

        // Eventos de teclado
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.code === "Space" || event.key === " ") && !isJumping && !paused && !gameOver) {
                velocityY = jumpStrength;
                isJumping = true;
            }
            if ((event.code === "ArrowLeft" || event.key === "a") && !paused && !gameOver) moveLeft = true;
            if ((event.code === "ArrowLeft" || event.key === "A") && !paused && !gameOver) moveLeft = true;
            if ((event.code === "ArrowRight" || event.key === "d") && !paused && !gameOver) moveRight = true;
            if ((event.code === "ArrowRight" || event.key === "D") && !paused && !gameOver) moveRight = true;

        };
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.code === "ArrowLeft" || event.key === "a") moveLeft = false;
            if (event.code === "ArrowLeft" || event.key === "A") moveLeft = false;
            if (event.code === "ArrowRight" || event.key === "d") moveRight = false;
            if (event.code === "ArrowRight" || event.key === "D") moveRight = false;
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Animación
        let animationId: number;
        const animate = () => {
            if (paused || gameOver) return;
            animationId = requestAnimationFrame(animate);

            // Movimiento lateral
            if (moveLeft) cube.position.x -= moveSpeed;
            if (moveRight) cube.position.x += moveSpeed;

            // Limitar movimiento lateral
            cube.position.x = Math.max(-8.5, Math.min(8.5, cube.position.x));

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
            obstacle.position.z += 0.1;
            if (obstacle.position.z > 8) {
                // Reiniciar obstáculo
                obstacle.position.z = -10;
                obstacle.position.x = (Math.random() - 0.3) * 6;
            }

            // Mover obstáculo hacia el jugador
            obstacle2.position.z += 0.1;
            if (obstacle2.position.z > 5) {
                // Reiniciar obstáculo
                obstacle2.position.z = -10;
                obstacle2.position.x = (Math.random() - 0.6) * 6;
            }

            // Detección de colisión simple
            const dx = cube.position.x - obstacle.position.x;
            const dx2 = cube.position.x - obstacle2.position.x;
            const dy = cube.position.y - obstacle.position.y;
            const dy2 = cube.position.y - obstacle2.position.y;
            const dz = cube.position.z - obstacle.position.z;
            const dz2 = cube.position.z - obstacle2.position.z;

            if (
                Math.abs(dx) < 1 &&
                Math.abs(dy) < 1 &&
                Math.abs(dz) < 1
            ) {

        gameOver = true;
        // Mostrar botón de reinicio
        const restartBtn = document.getElementById("restart-btn");
        if (restartBtn) restartBtn.style.display = "block";
    }

      if (
        Math.abs(dx2) < 1 &&
        Math.abs(dy2) < 1 &&
        Math.abs(dz2) < 1
    ) {
        gameOver = true;
        // Mostrar botón de reinicio
        const restartBtn = document.getElementById("restart-btn");
        if (restartBtn) restartBtn.style.display = "block";
    }

    renderer.render(scene, camera);
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
    // Limpiar handlers globales
    delete (window as any).__pauseGame;
    delete (window as any).__resumeGame;
    delete (window as any).__restartGame;
};

    }, []);

// Handlers para los botones
const handlePause = () => (window as any).__pauseGame && (window as any).__pauseGame();
const handleResume = () => (window as any).__resumeGame && (window as any).__resumeGame();
const handleRestart = () => (window as any).__restartGame && (window as any).__restartGame();

return (

    <div style={{ position: "relative", width: "80vw", height: "100vh" }} ref={mountRef}>
        <div style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 0,
            display: "flex",
            gap: "10px"
        }}>

            <button onClick={handlePause}>Pausar</button>
            <button onClick={handleResume}>Reanudar</button>

        </div>
        <button
            id="restart-btn"
            style={{
                display: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                padding: "20px",
                fontSize: "1.5rem"
            }}
            onClick={handleRestart}
        >
            Reiniciar
        </button>
    </div>
);
};

export default GameScene;