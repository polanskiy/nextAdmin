import React, { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    let timer;
    if (document) {
      if (document.readyState !== 'loading') {
        const globalBox = document.querySelector('.globalBox');
        if (globalBox !== null) {
          timer = setTimeout(() => {
            globalBox.classList.remove('preloadCss');
          }, 1000);
        }
      } else {
        document.addEventListener('DOMContentLoaded', () => {
          const globalBox = document.querySelector('.globalBox');
          if (globalBox !== null) {
            timer = setTimeout(() => {
              globalBox.classList.remove('preloadCss');
            }, 1000);
          }
        });
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="globalBox preloadCss">
      {children}
    </div>
  );
};
export default Layout;
