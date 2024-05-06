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
            const model = gltf.scene;
            scene.add(model);
            
            // You may need to adjust the position, rotation, and scale of the loaded model as necessary
            model.position.set(0, 0, 0); // Example position
            model.rotation.set(0, Math.PI / 2, 0); // Example rotation
            model.scale.set(0.1, 0.1, 0.1); // Example scale
            
            // Optionally, you can access animations if they exist in the GLTF file
            const mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
                        mixer.clipAction(clip).play();
            });
            
            // Start the animation loop
            animate();
            });
            
        });
