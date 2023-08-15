import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { TextureLoader } from 'three';

const Ground = () => {
    const gridMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/grid.png');
    const aoMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/ground-ao.png');
    useEffect(() => {
        gridMap.anisotropy = 16;
    }, [gridMap]);
    return (
        <>
            <mesh position={[-2.285, -0.015, -1.325]} rotation-x={-Math.PI * 0.5} rotation-z={-0.079}>
                <circleGeometry args={[6.12, 50]} />
                <MeshReflectorMaterial />
            </mesh>
        </>
    );
};

export default Ground;
