import { useEffect, useRef, useState } from "react";
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ModelGrande3 = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [soundRef, setSoundRef] = useState<THREE.Audio | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Escena, cámara, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(1.5, 1.5, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const width = window.innerWidth - 80;
    const height = window.innerHeight - 180;
    renderer.setSize(width, height);
    renderer.domElement.style.borderRadius = "16px";

    // Evita agregar el canvas dos veces
    if (mountRef.current.childElementCount === 0) {
      mountRef.current.appendChild(renderer.domElement);

    }

    // Luz
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(2, 4, 5);
    scene.add(directionalLight);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.minDistance = 2; // Mínimo alejado de la cámara al objeto
    controls.maxDistance = 10; // Máximo acercamiento
    controls.minPolarAngle = Math.PI / 4; // 45 grados
    controls.maxPolarAngle = Math.PI / 2; // 90 grados
    controls.minAzimuthAngle = -Math.PI / 4; // -45°
    controls.maxAzimuthAngle = Math.PI / 4;  // 45°


    // create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    camera.add(listener);

    // create a global audio source
    const sound = new THREE.Audio(listener);

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(
      "/music/skips.mp3",
      function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        setSoundRef(sound);
      }
    );


    // Cargar modelo GLB/GLTF
    const loader = new GLTFLoader();
    loader.load(
      "/assetsModel/skips.glb", // asegúrate de que la ruta sea correcta
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        scene.add(model);
        model.position.set(0, -1, 0); // Ajusta la posición del modelo

        // === Agrega el cilindro debajo del modelo ===
        const radiusTop = 1;
        const radiusBottom = 1;
        const height = 0.25; // poca altura
        const radialSegments = 32;
        const cylinderGeometry = new THREE.CylinderGeometry(
          radiusTop,
          radiusBottom,
          height,
          radialSegments
        );
        const cylinderMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,      // Blanco
          roughness: 0.2,       // Superficie lisa
        });
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.set(0, -1 - height / 2, 0); // justo debajo del modelo
        scene.add(cylinder);
        // === Fin cilindro ===
      },
      undefined,
      (error) => {
        console.error("Error al cargar modelo:", error);
      }
    );


    // PARTICULAS flotantes
    const particleCount = 300;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20; // rango -10 a 10
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    //PROPIEDADES Particulas
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.1,
      transparent: true,
      opacity: 0.7,
    });
    //Añadirlos a escena
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);


    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      // Animacion Partículas flotando (simple movimiento)
      const pos = particles.geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 1; i < pos.count; i += 3) {
        pos.array[i] += 0.002; // eje Y
        if (pos.array[i] > 10) pos.array[i] = -10;
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Handlers (Controladores)
  const handlePlaySound = () => {
    if (soundRef && !soundRef.isPlaying) {
      soundRef.play();
      setIsPlaying(true);
    }
  };

  const handlePauseSound = () => {
    if (soundRef && soundRef.isPlaying) {
      soundRef.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <div ref={mountRef} style={{ width: "80vw", height: "40vh" }} />
      <div
        style={{
          position: "relative",
          top: 300,
          left: 20,
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={handlePlaySound} disabled={isPlaying}>
          ▶️ Play
        </button>
        <button onClick={handlePauseSound} disabled={!isPlaying}>
          ⏸️ Pause
        </button>
      </div>
    </div>
  );

};

export default ModelGrande3;