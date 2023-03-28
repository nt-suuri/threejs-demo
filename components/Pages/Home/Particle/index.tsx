//@ts-nocheck 
import React, { useRef, useEffect, useState } from 'react';


const Particle = () => {
    const particleWrapperRef = useRef(null);
    const [np, setNp] = useState(undefined);

    const width = typeof window !== 'undefined' ? Math.min(800, window.innerWidth - 30) : 800;
    const height = typeof window !== 'undefined' ? Math.min(600, window.innerHeight - 120 - 30) : 600;
    const settings = {
        colorArr: undefined,
        renderer: 'webgl', // 'default'
        imageUrl: '/logo.svg',
        particleGap: 5,
        mouseForce: 50,
        clickStrength: 100,
        noise: 8,
        gravity: 0.08,
        width: width,
        height: height,
        maxWidth: 250,
        maxHeight: 250,
        particleSize: 1.5,
        layerCount: 2,
        depth: 1,
        layerDistance: 5,
        lifeCycle: false,
        growDuration: 200,
        waitDuration: 200,
        shrinkDuration: 200,
        shrinkDistance: 50,
    };

    useEffect(() => {
        // if (np) {
        //     np.events.imageLoaded = [];
        //     np.stop();
        // }

        const { NextParticle } = require('./nextparticle');


        setNp(new NextParticle({ ...settings, wrapperElement: particleWrapperRef.current }));

        if (np && !np.events.stopped) {
            np.on('stopped', function () {
                this.canvas.remove();
            });
        }


    }, [np]);

    // useEffect(() => {

    // }, [np]);

    return <div ref={particleWrapperRef}></div>;
}

export default Particle;