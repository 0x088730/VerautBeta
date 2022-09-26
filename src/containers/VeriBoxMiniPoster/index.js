import * as THREE from "three";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Sky,
  useScroll,
  useGLTF,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import VeriBoxMini from "../../assets/elements/VERIBOX-MINI-1024x175.png";
import "./style.scss";

export default function VeriBoxMiniPoster() {
  const [hovered, hover] = useState(false);
  const mouse = useRef([0, 0]);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  useEffect(() => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    const canvas = renderer.domElement;
    canvas.addEventListener(
      "webglcontextlost",
      function (event) {
        event.preventDefault();
        setTimeout(function () {
          renderer.forceContextRestore();
        }, 1);
      },
      false
    );
  }, [hovered]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 10, 10], near: 0.4, far: 1000, fov: 50 }}
        style={{ height: "30vh", width: "20vw" }}
      >
        <color attach="background" args={"red"} />
        <ambientLight intensity={0.03} />
        <spotLight
          angle={0.14}
          color="#CDDAE0"
          penumbra={1}
          position={[25, 50, -20]}
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
          castShadow
        />
        <Sky scale={1000} sunPosition={[0, 0, 0]} />
        <Suspense fallback={null}>
          <LittlestTokyo
            mouse={mouse}
            hover={hover}
            scale={0.1}
            position={[0, 6, -4]}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div style={{textAlign: "center"}}>
        <div>
          <img src={VeriBoxMini} alt="" style={{ width: "50%" }} />
        </div>
        <div className="atex_zone">
          VERIBOX-MINI is an ATEX ExZone1 (explosion zone)
          <br /> certified, battery-operated data logger for the
          <br /> automatic remote meter reading of measuring devices
          <br /> from large / industrial customers, larger measuring
          <br /> points or generally decentralized locations.
        </div>
      </div>
    </div>
  );
}

function LittlestTokyo({ hover }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        state.mouse.x * 2,
        0.05
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        state.mouse.y / 2,
        0.05
      );
      ref.current.rotation.y = 0.8;
    }
  });

  const { scene, nodes, animations } = useGLTF("/veribox.gltf");
  const { actions } = useAnimations(animations, scene);

  return (
    <group ref={ref}>
      <primitive
        scale={(50, 50, 50)}
        object={scene}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      />
    </group>
  );
}

useGLTF.preload("/veribox.gltf");
