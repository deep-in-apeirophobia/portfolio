'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import * as THREE from 'three';
import { cwWebGPURenderer } from 'three/webgpu'
import { WebGPURenderer } from 'three/webgpu'
import * as TSL from 'three/tsl'
import { EffectComposer, ChromaticAberration, Bloom } from '@react-three/postprocessing';

// Previous shader material code remains the same
// const GlassMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uTexture: null,
//     uRefraction: 1.2,
//     uChromaticAberration: 1.0,
//     uColorBleed: 0.05,
//     uBleedColor: new THREE.Color(0.8, 0.2, 0.2)
//   },
//   // Previous vertex shader remains the same
//   `
//     varying vec2 vUv;
//     varying vec3 vPosition;
//     varying vec3 vNormal;
//     
//     void main() {
//       vUv = uv;
//       vPosition = position;
//       vNormal = normal;
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
//   `,
//   // Previous fragment shader remains the same
//   `
//     uniform float uTime;
//     uniform sampler2D uTexture;
//     uniform float uRefraction;
//     uniform float uChromaticAberration;
//     uniform float uColorBleed;
//     uniform vec3 uBleedColor;
//     
//     varying vec2 vUv;
//     varying vec3 vPosition;
//     varying vec3 vNormal;
//     
//     vec4 sampleWithBleed(sampler2D tex, vec2 uv, float intensity) {
//       vec4 originalColor = texture2D(tex, uv);
//       vec4 leftColor = texture2D(tex, uv - vec2(intensity, 0.0));
//       vec4 rightColor = texture2D(tex, uv + vec2(intensity, 0.0));
//       vec4 topColor = texture2D(tex, uv + vec2(0.0, intensity));
//       vec4 bottomColor = texture2D(tex, uv - vec2(0.0, intensity));
//       vec4 bleedColor = vec4(uBleedColor, 1.0);
//       vec4 neighborAvg = (leftColor + rightColor + topColor + bottomColor) / 4.0;
//       return mix(originalColor, mix(neighborAvg, bleedColor, 0.3), intensity);
//     }
//     
//     void main() {
//       vec2 distortion = vUv;
//       distortion.x += sin(vUv.y * 10.0 + uTime) * 0.01;
//       distortion.y += cos(vUv.x * 10.0 + uTime) * 0.01;
//       
//       vec4 rChannel = sampleWithBleed(uTexture, distortion + vec2(0.01, 0.0) * uChromaticAberration, uColorBleed);
//       vec4 gChannel = sampleWithBleed(uTexture, distortion, uColorBleed);
//       vec4 bChannel = sampleWithBleed(uTexture, distortion - vec2(0.01, 0.0) * uChromaticAberration, uColorBleed);
//       
//       vec4 glassColor = vec4(rChannel.r, gChannel.g, bChannel.b, 1.0);
//       
//       vec3 viewDirection = normalize(cameraPosition - vPosition);
//       float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.0);
//       
//       float pulsingBleed = uColorBleed * (1.0 + sin(uTime * 2.0) * 0.2);
//       
//       vec4 edgeGlow = vec4(uBleedColor * fresnel, 1.0);
//       gl_FragColor = mix(glassColor, edgeGlow, fresnel * 0.3 + pulsingBleed);
//     }
//   `
// );

// extend({ GlassMaterial });

const useResponsiveSize = (texture) => {
  const { viewport } = useThree();
  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    if (texture) {
      const imageAspect = texture.image.width / texture.image.height;
      const viewportAspect = viewport.width / viewport.height;
      
      let width, height;
      if (imageAspect > viewportAspect) {
        // Image is wider than viewport
        width = viewport.width;
        height = viewport.width / imageAspect;
      } else {
        // Image is taller than viewport
        height = viewport.height;
        width = viewport.height * imageAspect;
      }
      
      // Add some padding (0.9 means 90% of the viewport)
      setScale([width * 0.9, height * 0.9, 1]);
    }
  }, [texture, viewport]);

  return scale;
};

const GlassPhoto = ({ 
  imageUrl, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  bleedColor = '#cc3333',
  bleedIntensity = 0.02,
  scrollRange = [0, 1]
}) => {
  const meshRef = useRef();
  const materialRef = useRef();
  const texture = useLoader(THREE.TextureLoader, imageUrl);

	// const { gl } = useThree()

	// console.log(gl.backend.isWebGPUBackend ? 'WebGPU Backend' : 'WebGL Backend')
	// useEffect(() => {
 //    console.log(TSL.sqrt(2))
 //  }, [])


	const scale = useResponsiveSize(texture);
  
  const { scrollY, scrollYProgress } = useScroll();
	const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 150,
    stiffness: 500
  });
	const scrollEffect = useTransform(
    scrollYProgress,
    scrollRange,
    [0, 1]
  );
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, Math.PI / 36], {
    clamp: false
  });

  // const dynamicBleedIntensity = useTransform(
  //   scrollYProgress,
  //   scrollRange,
  //   [bleedIntensity, bleedIntensity * 3] // Intensity range
  // );

  useFrame((state) => {
    if (materialRef.current) {
      // materialRef.current.uTime = state.clock.getElapsedTime();
      // materialRef.current.uColorBleed = dynamicBleedIntensity.get();
			const time = state.clock.getElapsedTime();
			materialRef.current.distort = 0.02 * (1 + Math.sin(time));
      // materialRef.current.opacity = 0.8 + velocityFactor.get() * 0.2;
      materialRef.current.refractionRatio = 0.94 + velocityFactor.get() * 0.04;
    }
		if (meshRef.current) {
			meshRef.current.rotation.x = rotation[0] + velocityFactor.get()
		}
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1, 32, 32]} />
			{/*
      <glassMaterial 
        ref={materialRef} 
        uTexture={texture}
        uRefraction={1.2}
        uChromaticAberration={1.0}
        uColorBleed={bleedIntensity}
        uBleedColor={new THREE.Color(bleedColor)}
        transparent
      />
			*/}
			<meshPhysicalMaterial
        ref={materialRef}
        // transparent
        transmission={0.5}
        roughness={0.8}
        metalness={0}
        clearcoat={0}
        clearcoatRoughness={0.2}
        ior={2}
        thickness={0.3}
        // attenuationColor={new THREE.Color("#ffffff")}
        // attenuationDistance={1}
        map={texture}
        // envMapIntensity={0.7}
      />
    </mesh>
  );
};
// const imageUrl = "/profile-small.jpg";

const Scene = ({ 
  imageUrl = "/profile-small.jpg",
  bleedColor = '#cc3333',
  bleedIntensity = 0.05,
  scrollRange = [0, 1]
}) => {
	const { scene } = useThree();
  
  useEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(new THREE.WebGLRenderer());
    pmremGenerator.compileEquirectangularShader();
    
    const envMap = pmremGenerator.fromScene(new THREE.Scene()).texture;
    scene.environment = envMap;
  }, [scene]);

	return (
		<>
      <ambientLight intensity={0.5} />
			<pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} />
      <pointLight position={[0, 0, 5]} intensity={1.2} /> 
      
			<GlassPhoto 
				imageUrl={imageUrl}
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
				bleedColor={bleedColor}
				bleedIntensity={bleedIntensity}
				scrollRange={scrollRange}
			/>
      {/* Post-processing effects */}
    </>
	)
}

// Updated scene component with scroll container
const GlassPhotoScene = ({ 
  imageUrl = "/profile-small.jpg",
  bleedColor = '#cc3333',
  bleedIntensity = 0.05,
  scrollRange = [0, 1]
}) => {
	const [mounted, setMounted] = useState(false);

  const [frameloop, setFrameloop] = useState('never')

	// useEffect(() => {
	// 	if (window) setMounted(true)
	// }, [])

	// if (!mounted) return <></>;

  return (
    <div className="w-full h-full">
			<Canvas 
				camera={{ position: [0, 0, 2], fov: 50 }} 
				dpr={[1, 2]} 
				frameloop={frameloop}
				// gl={canvas => {
				// 	const renderer = new WebGPURenderer({
				// 		canvas,
				// 		powerPreference: 'high-performance',
				// 		antialias: true,
				// 		alpha: true,
				// 	})
				// 	renderer.init().then(() => setFrameloop('always'))
				// 	renderer.xr = { addEventListener: () => {} }
				// 	return renderer
				// }}
				// gl={canvas => {
				// 	console.log(canvas)
				// 	const renderer = new THREE.WebGLRenderer({
				// 		canvas: canvas.canvas,
				// 		powerPreference: 'high-performance',
				// 		antialias: true,
				// 		alpha: true,
				// 	})
				// 	// renderer.init().then(() => setFrameloop('always'))
				// 	renderer.xr.enabled = false;
				// 	return renderer
				// }}
				onCreated={({ gl, setFrameloop }) => {
					console.log("Renderer initialized:", gl);

					// Set frameLoop to "always" when the renderer is ready
					setFrameloop("always");

					// Optional: Modify WebGLRenderer settings
					// gl.setPixelRatio(window.devicePixelRatio);
					// gl.setSize(window.innerWidth, window.innerHeight);
					gl.xr.enabled = false;
				}}


			>
				
				<Scene  
					imageUrl={imageUrl}
					position={[0, 0, 0]}
					rotation={[0, 0, 0]}
					bleedColor={bleedColor}
					bleedIntensity={bleedIntensity}
					scrollRange={scrollRange}
				/>
				{/*
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<GlassPhoto 
					imageUrl={imageUrl}
					position={[0, 0, 0]}
					rotation={[0, 0, 0]}
					bleedColor={bleedColor}
					bleedIntensity={bleedIntensity}
					scrollRange={scrollRange}
				/>
					*/}
			</Canvas>
    </div>
  );
};

export default GlassPhotoScene;
