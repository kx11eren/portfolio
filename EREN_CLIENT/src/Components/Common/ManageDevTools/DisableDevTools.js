import React, { useEffect } from 'react';

export default function DisableDevTools() {
  useEffect(() => {
    return () => {
    document.addEventListener('contextmenu', (e) => disableRightClick(e));
    window.addEventListener('keydown', (e) => blockDevToolsKeys(e));
    }
      // window.onkeydown = (e) => {
      //   if (e.keyCode === 123) {  
      //     e.preventDefault();
      //   }
      // };
    }, []);
  const blockDevToolsKeys = (e) => {
    if (e.keyCode === 123 || e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.metaKey && e.altKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'U')) {
      e.preventDefault(); 
      return false; 
  };
}
  const disableRightClick = (e) => {
    e.preventDefault();
    return false;
  };
  return null;
}
