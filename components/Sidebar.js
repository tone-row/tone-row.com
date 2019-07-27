import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export const Title = ({ toggleMenu }) => (
  <div>
    <button type="button" onClick={toggleMenu}>
      Click
    </button>
    <h1>
      <span>Tone</span>
      <div className="line"></div>
      <span>Row</span>
    </h1>
    <style jsx>{`
      button {
        width: var(--sidebar-width);
        height: var(--sidebar-width);
        padding: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        display: var(--toggle-display);
        background: white;
        font-weight: 700;
      }
      button:focus {
        outline: none;
      }

      h1 {
        font-size: var(--h1-font-size);
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: var(--h1-width);
        margin: 0;
        transform: rotate(90deg);
        transform-origin: 0 0;
        position: absolute;
        left: 100%;
        top: var(--h1-top);
        padding: var(--padding);
        line-height: 1;
      }

      .line {
        flex: 1;
        height: 6px;
        background: black;
        margin-top: -4px;
        margin-left: 1rem;
        margin-right: 1rem;
      }
    `}</style>
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

    <style jsx>{`
      aside {
        background: yellow;
        grid-row: 1;
      }

      .inner {
        padding: var(--padding);
        position: sticky;
        top: 0;
      }
    `}</style>
  </aside>
);

export default withRouter(Sidebar);
