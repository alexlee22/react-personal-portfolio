import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Vis = () => {
	const mount = useRef(null)
	const [isAnimating, setAnimating] = useState(true)
	const controls = useRef(null)

	useEffect(() => {
		let width = mount.current.clientWidth
		let height = mount.current.clientHeight
		let frameId

		const scene = new THREE.Scene()
		//const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
		const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)
		//var camera = new THREE.OrthographicCamera( width/-2,width/2, height/2,height/-2, 1, 1000 );
		const renderer = new THREE.WebGLRenderer({ antialias: true })
		
		camera.translateX(-1)

		

		const geometry1 = new THREE.IcosahedronGeometry(1, 1)
		const geometry2 = new THREE.IcosahedronGeometry(1.1, 1)

		const solarRingGeometry1 = new THREE.TorusGeometry(1.3, 0.005, 16, 64, 6.3)
		const solarRingGeometry2 = new THREE.TorusGeometry(1.45, 0.005, 16, 64, 6.3)
		const solarRingGeometry3 = new THREE.TorusGeometry(1.6, 0.005, 16, 64, 6.3)
		const solarRingGeometry4 = new THREE.TorusGeometry(1.75, 0.005, 16, 64, 6.3)
		const solarRingGeometry5 = new THREE.TorusGeometry(1.9, 0.005, 16, 64, 6.3)
		const solarRingMaterial = new THREE.MeshBasicMaterial({
			color: '#ffffff'
		})
		var solarRing1 = new THREE.Mesh( solarRingGeometry1, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1)
		var solarRing2 = new THREE.Mesh( solarRingGeometry2, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1)
		var solarRing3 = new THREE.Mesh( solarRingGeometry3, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1)
		var solarRing4 = new THREE.Mesh( solarRingGeometry4, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1)
		var solarRing5 = new THREE.Mesh( solarRingGeometry5, solarRingMaterial ).rotateX(Math.PI/ 1.7).rotateY(Math.PI/ -1)
		
		scene.add(solarRing1);
		scene.add(solarRing2);
		scene.add(solarRing3);
		scene.add(solarRing4);
		scene.add(solarRing5);
		


		const material1 = new THREE.MeshBasicMaterial({
			color: '#10455b',
			vertexColors: THREE.VertexColors,
		});
		const material2 = new THREE.MeshBasicMaterial({
			color: '#ffffff',
			vertexColors: THREE.VertexColors,
			wireframe: true
		});
		const wireframeMaterial= new THREE.MeshBasicMaterial({
			color: '#000000',
			wireframe: true,
			flatShading: true,
		})
		const cube1 = new THREE.Mesh(geometry1, material1)
		const cube1Wireframe = new THREE.Mesh(geometry1, wireframeMaterial)
		cube1.add(cube1Wireframe);
		const cube2 = new THREE.Mesh(geometry2, material2)
		cube2.rotateZ(Math.PI/4);

		camera.position.z = 4
		scene.add(cube1)
		scene.add(cube2)
		renderer.setClearColor('#000000')
		renderer.setSize(width, height)

		const renderScene = () => {
			renderer.render(scene, camera)
		}

		const handleResize = () => {
			width = mount.current.clientWidth
			height = mount.current.clientHeight
			renderer.setSize(width, height)
			camera.aspect = width / height
			camera.updateProjectionMatrix()
			renderScene()
		}

		const animate = () => {
			cube1.rotation.x -= 0.0005
			cube1.rotation.y += 0.0005
			cube2.rotation.x -= 0.0005
			cube2.rotation.y += 0.0005
			
			solarRing1.rotation.z += 0.005 * Math.PI/ 1.8
			solarRing2.rotation.z -= 0.005 * Math.PI/ 1.8
			solarRing3.rotation.z += 0.005 * Math.PI/ 1.8
			solarRing4.rotation.z -= 0.005 * Math.PI/ 1.8
			solarRing5.rotation.z += 0.005 * Math.PI/ 1.8

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

			mount.current.appendChild(renderer.domElement)
			window.addEventListener('resize', handleResize)
			start()

			controls.current = { start, stop }

			return () => {
				stop()
				window.removeEventListener('resize', handleResize)
				mount.current.removeChild(renderer.domElement)

				scene.remove(cube1)
				scene.remove(cube2)
				geometry1.dispose()
				material1.dispose()
				geometry2.dispose()
				material2.dispose()
			}
		}, [])

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

//onClick={() => setAnimating(!isAnimating)}