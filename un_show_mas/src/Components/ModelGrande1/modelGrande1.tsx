import { useEffect, useRef, useState } from "react";
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ModelGrande1 = () => {
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
    camera.position.set(2, 1.5, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const width = window.innerWidth - 80;
    const height = window.innerHeight - 180;
    renderer.domElement.style.borderRadius = "16px";
    renderer.setSize(width, height);


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
      "/music/dcity.mp3",
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
      "/assetsModel/mordecai_fusionfall_heroes.glb", // asegúrate de que la ruta sea correcta
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error al cargar modelo:", error);
      }
    );

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
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

export default ModelGrande1;