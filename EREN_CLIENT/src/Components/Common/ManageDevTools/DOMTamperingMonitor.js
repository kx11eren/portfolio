import React, { useEffect } from 'react';

const DOMTamperingMonitor = () => {
    useEffect(() => {
        // The element you want to monitor
        const targetNode = document.getElementById("important-element");
        const originalContent = targetNode ? targetNode.innerHTML : '';
        // Configuration for the observer (monitoring changes to child elements)
        const config = {
            attributes: true,
            childList: true,
            subtree: true
        };

        // Callback function to be executed when mutations are observed
        const callback = (mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type === "childList" || mutation.type === "attributes") {
                    // Revert changes made to the content
                    if (targetNode){
                        if ( targetNode.innerHTML !== originalContent) {
                        targetNode.innerHTML = originalContent;
                        }
                        mutation.stopImmediatePropagation();  // Stop further propagation
                        mutation.preventDefault();  // Prevent the mutation
                    }
                    
                }
            }
        };

        // Create an instance of MutationObserver with the callback
        const observer = new MutationObserver(callback);

        // Start observing the target element
        if (targetNode) {
            observer.observe(targetNode, config);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            if (targetNode) {
                observer.disconnect();
            }
        };
    }, []); 

    return null; 
};

export default  DOMTamperingMonitor;