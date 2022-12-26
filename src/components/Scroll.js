import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.5});

    if (view)
        controls.start('show');
    else
        controls.start('hidden'); 

    return [element, controls];
}

export const ScrollTop = () => {
    const { pathname } = useLocation(); 

    useEffect(() => {
        window.scroll({
            top: 0, 
            left: 0
        });
    }, [pathname]);
}