document.addEventListener('DOMContentLoaded', function () {
            // Create a scene
            const scene = new THREE.Scene();

            // Create a camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Create a renderer
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create a cube
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Add animation
            function animate() {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);

            }
            animate();
            
            // Load the  model
            const loader = new THREE.GLTFLoader();
            loader.load('./Flamingo.glb', (gltf) => {
                        const model = gltf.scene;
                        scene.add(model);
                        // Access animations
                        const mixer2 = new THREE.AnimationMixer(model);
                        const action2 = mixer2.clipAction(gltf.animations[0]); // Assuming the first animation
                        action2.play(); // Start animation
                        animate();
            });
            
        });
