import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Track = () => {
    const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/track.glb');
    const colorMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/track.png');
    useEffect(() => {
        colorMap.anisotropy = 16;
    }, [colorMap]);
    let geometry = result.scene.children[0].geometry;
    return (
        <mesh>
            <primitive object={geometry} attach={'geometry'} />
            <meshBasicMaterial toneMapped={false} map={colorMap} />
        </mesh>
    );
};

export default Track;
