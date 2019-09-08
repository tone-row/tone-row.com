import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export const Title = ({ toggleMenu }) => (
  <div className="sidebar-title">
    <button type="button" onClick={toggleMenu}>
      Click
    </button>
    <h1>
      <span>Tone</span>
      <div className="line" />
      <span>Row</span>
    </h1>
  </div>
);

const NavLink = React.memo(({ href, children, current }) => {
  const isActive =
    (href === '/' && current === '/') ||
    (current !== '/' && href !== '/' && current.includes(href));
  return (
    <li>
      <Link href={href}>
        <a className={isActive ? 'active' : ''}>{children}</a>
      </Link>
    </li>
  );
});
NavLink.displayName = 'NavLink';

const Nav = ({ current }) => (
  <nav>
    <ul>
      <NavLink current={current} href="/">
        History
      </NavLink>
      <NavLink current={current} href="/services">
        Services
      </NavLink>
      <NavLink current={current} href="/work">
        Work
      </NavLink>
      <NavLink current={current} href="/approach">
        Approach
      </NavLink>
    </ul>
  </nav>
);

const Sidebar = ({ router, toggleMenu }) => (
  <aside>
    <div className="inner">
      <Title toggleMenu={toggleMenu} />
      <Nav current={router.asPath} />
    </div>
  </aside>
);

export default withRouter(Sidebar);
