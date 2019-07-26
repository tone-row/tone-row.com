import React, { memo, useState, useEffect } from 'react';
import Router from 'next/router';
import Sidebar from './Sidebar';

const AppWrapper = memo(({ Component, pageProps }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  useEffect(() => {
    Router.events.on(
      'routeChangeComplete',
      () => !showMenu && setShowMenu(false)
    );
    window.addEventListener('resize', () => !showMenu && setShowMenu(false));
  }, [showMenu]);
  return (
    <div id="App" className={showMenu ? 'showing-menu' : ''}>
      <Sidebar toggleMenu={toggleMenu} />
      <Component {...pageProps} />
      <style jsx>{`
        #App {
          min-height: 100vh;
          display: grid;
          grid-template-columns: var(--sidebar-width) auto;
          transition: var(--showing-menu-transition);
        }

        #App.showing-menu {
          transform: var(--showing-menu-transform);
        }
      `}</style>
    </div>
  );
});

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
