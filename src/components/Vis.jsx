import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Vis = () => {
  const mount = useRef(null)
  const [isAnimating, setAnimating] = useState(true)
  const controls = useRef(null)

  useEffect(() => {

    //
    const renderScene = () => {
      renderer.render(scene, camera)
    }

    // Handle Resize Window
    const handleResize = () => {
      width = mount.current.clientWidth
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }

    // Animate Loop
    const animate = () => {
      planet.rotation.x -= 0.0005
      planet.rotation.y += 0.0005

      atmosphere.rotation.x -= 0.0005
      atmosphere.rotation.y += 0.0005
      
      solarRings.map((r, idx) => {
        if ((idx + 1) % 2 == 0){
          r.rotation.z += 0.005 * Math.PI/1.8;
        } else {
          r.rotation.z -= 0.005 * Math.PI/1.8;
        }
      }) 

      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate)
      }
    }
    const stop = () => {
      cancelAnimationFrame(frameId)
      frameId = null
    }


    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    let frameId

    // SETUP
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    camera.translateX(-1)
    camera.position.z = 4

    
    // PLANET
    const planetMesh = new THREE.IcosahedronGeometry(1, 1);
    const planetMaterial = new THREE.MeshBasicMaterial({
      color: '#10455b',
      vertexColors: THREE.VertexColors,
    });
    const planetWireframeMaterial= new THREE.MeshBasicMaterial({
      color: '#000000',
      wireframe: true,
      flatShading: true,
    })
    const planet = new THREE.Mesh(planetMesh, planetMaterial);
    const planetWireframe = new THREE.Mesh(planetMesh, planetWireframeMaterial);
    planet.add(planetWireframe);
    scene.add(planet);


    // ATMOSPHERE
    const atmosphereMesh = new THREE.IcosahedronGeometry(1.1, 1);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      vertexColors: THREE.VertexColors,
      wireframe: true
    });
    const atmosphere = new THREE.Mesh(atmosphereMesh, atmosphereMaterial)
    atmosphere.rotateZ(Math.PI/4);
    scene.add(atmosphere);

    
    // SOLAR RINGS
    const ringRadius = 1.3;
    const ringSpacing = 0.15;
    const noOfRings = 5;
    const solarRingMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff'});
    var solarRings = [...Array(noOfRings).keys()].map((i) => {
      let ringGeometry = new THREE.TorusGeometry(ringRadius + (i * ringSpacing), 0.005, 16, 64, 6.3);
      let solarRing = new THREE.Mesh( ringGeometry, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1);
      scene.add(solarRing);
      return(solarRing);
    })
    
    renderer.setClearColor('#000000');
    renderer.setSize(width, height);

    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    start();

    controls.current = { start, stop }

    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      mount.current.removeChild(renderer.domElement)

      scene.remove(planet);
      scene.remove(planetWireframe);
      planetMaterial.dispose();
      planetWireframeMaterial.dispose();
      planetMesh.dispose();

      scene.remove(atmosphere);
      atmosphereMaterial.dispose();
      atmosphereMesh.dispose();
    }
  }, []);

  useEffect(
    () => {
      if (isAnimating) {
        controls.current.start()
      } else {
        controls.current.stop()
      }
    },
    [isAnimating],
  )

  /* eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions
  */
  return (
    <div id="splash-doodle" ref={mount} />
  )
}

export default Vis