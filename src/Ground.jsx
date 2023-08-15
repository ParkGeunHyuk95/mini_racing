import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { TextureLoader } from 'three';

const Ground = () => {
    const gridMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/textures/grid.png');
    useEffect(() => {
        gridMap.anisotropy = 16;
    }, [gridMap]);
    return <div></div>;
};

export default Ground;
