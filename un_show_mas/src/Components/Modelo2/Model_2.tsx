import { useEffect, useRef } from "react";
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const Model2 = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Limpia el div antes de agregar el canvas
    while (mountRef.current.firstChild) {
    mountRef.current.removeChild(mountRef.current.firstChild);
    }

    // Escena, cámara, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-1, 1.5, 0.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 300);
    mountRef.current.appendChild(renderer.domElement);

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

    // Cargar modelo GLB/GLTF
    const loader = new GLTFLoader();
    loader.load(
      "/assetsModel/rigby__regular_show.glb", // asegúrate de que la ruta sea correcta
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

  return <div ref={mountRef} style={{ width: "50vw", height: "50vh" }} />;
};

export default Model2;