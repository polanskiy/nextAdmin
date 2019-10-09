import React, { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    if (document) {
      if (document.readyState !== 'loading') {
        const globalBox = document.querySelector('.globalBox');
        if (globalBox !== null) {
          globalBox.classList.remove('preloadCss');
        }
      } else {
        document.addEventListener('DOMContentLoaded', () => { 
          const globalBox = document.querySelector('.globalBox');
          if (globalBox !== null) {
            globalBox.classList.remove('preloadCss');
          }
        });
      }
    }
  }, []);

  return (
    <div className="globalBox preloadCss">
      {children}
    </div>
  );
};
export default Layout;
