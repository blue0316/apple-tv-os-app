import React, { useEffect, useRef, useState } from 'react';
import { GLView, ExpoWebGLRenderingContext} from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import OrbitControlsView from 'expo-three-orbit-controls';
import { GLTFLoader } from 'three/examples/jsm/loaders/gltfloader';

class SphereMesh extends THREE.Mesh {
    constructor() {
        super(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'red' })
        )
    }
}

function ModelViewer() {
    // Animmation clock
    const clock = new THREE.Clock()

    const [camera, setCamera] = useState<THREE.Camera | null>(null)

    async function loadModel() {
        const gltfLoader = new GLTFLoader()

        gltfLoader.load(
            // resource URL
            url,
            // called when the resource is loaded
            function (gltf) {
                console.log('sc')
            },
            // called while loading is progressing
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened', error)
            }
        )
    }

    // Mesh
    const cube = new SphereMesh()

    const tick = () => {
        window.requestAnimationFrame(tick)
    }

    useEffect(() => {
        loadModel();
    }, []);

    return (
        <OrbitControlsView style={{ flex: 1 }} camera={camera}>
            <GLView
                style={{ flex: 1 }}
                onContextCreate={async (gl) => {
                    //  GL Parameter disruption
                    const {
                        drawingBufferWidth: width,
                        drawingBufferHeight: height
                    } = gl

                    // Scene
                    const scene = new THREE.Scene()

                    // Geometry
                    scene.add(cube)

                    // Camera
                    const camera = new THREE.PerspectiveCamera(
                        75,
                        width / height,
                        1,
                        1000
                    )
                    camera.position.z = 2
                    camera.position.x = 2
                    camera.position.y = 2
                    camera.lookAt(cube.position)
                    setCamera(camera)
                    scene.add(camera)

                    // Renderer
                    const renderer = new Renderer({ gl })
                    renderer.setSize(width, height)
                    renderer.setClearColor('#fff')

                    // Render function
                    const render = () => {
                        requestAnimationFrame(render)
                        renderer.render(scene, camera)
                        gl.endFrameEXP()
                    }
                    render()
                }}
            />
        </OrbitControlsView>
    )
}

export default ModelViewer;

// const ModelViewer = () => {
//     const contextCreater = (gl) => {
//         // 1. Create Scene
//         let scene = new THREE.Scene();

//         const BACKGROUND_COLOR = 0xffffff;
//         scene.background = new THREE.Color(BACKGROUND_COLOR);
//         scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);
        
//         // 2. Create Camera
//         let camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);

//         // 3. Create Renderer
//         let renderer = new Renderer({ gl });
//         renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
//         renderer.setClearColor(0x0000ff, 1);

//         if (typeof window !== 'undefined') {
//             renderer.setPixelRatio(window.devicePixelRatio);
//         }

//         renderer.domElement
//     };

//     return (
//         <GLView
//             style={{
//                 width: '100%',
//                 height: '100%'
//             }}
//             onContextCreate={ contextCreater }
//         />
//     )
// }

// export default ModelViewer;