import React, { useEffect } from 'react';

const BlockConsoleLogs = () => {
    useEffect(() => {
        // Override console.log to prevent it from being used in DevTools
        console.log = function () {
            // Block the logs
        };
        console.warn = function () {
            // Block the warnings
        };
        console.error = function () {
            // Block the errors
        };
    }, []);

    return null;
};

export default BlockConsoleLogs;
