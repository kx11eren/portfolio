import React, { createContext, useState, useContext } from 'react';

const BrandingContext = createContext();

export const useBranding = () => useContext(BrandingContext);

export const BrandingProvider = ({ children }) => {
    const [branding, setBranding] = useState({
        primaryColor: '#FF6347',  
        secondaryColor: '#4B0082', 
        backgroundColor: '#f5f5f5', 
        textPrimaryColor: '#333333', 
    });

    // Function to change branding dynamically
    const updateBranding = (newBranding) => {
        setBranding(newBranding);
        // Dynamically update the CSS variables
        Object.keys(newBranding).forEach((key) => {
            document.documentElement.style.setProperty(`--${key}`, newBranding[key]);
        });
    };

    return (
        <BrandingContext.Provider value={{ branding, updateBranding }}>
            {children}
        </BrandingContext.Provider>
    );
};
