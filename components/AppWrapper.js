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
    </div>
  );
});

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
