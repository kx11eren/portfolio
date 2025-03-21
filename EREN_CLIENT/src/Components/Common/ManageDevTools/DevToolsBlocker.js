import React, { useEffect } from 'react';

const DevToolsBlocker = () => {
    useEffect(() => {
        const detectDevTools = () => {
            const widthThreshold = 160; 
            const heightThreshold = 100;
            const devtoolsOpen =
                window.outerWidth - window.innerWidth > widthThreshold ||
                window.outerHeight - window.innerHeight > heightThreshold;

            if (devtoolsOpen) {
                window.location.reload();
            }
        };

        const interval = setInterval(detectDevTools, 1000);

        return () => clearInterval(interval);
    }, []);

    return null; 
};

export default DevToolsBlocker;
