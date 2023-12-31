import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';
import Ground from './Ground';
import Track from './Track';

export function Scene() {
    return (
        <Suspense fallback={null}>
            <Environment files={process.env.PUBLIC_URL + 'textures/envmap.hdr'} background={'both'} />
            <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
            <OrbitControls target={[-2.64, -0.71, 0.03]} />
            <Track />
            <Ground />
        </Suspense>
    );
}
