import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

export const Title = ({ tag: Tag = 'h1', className = 'brand' }) => (
  <Tag className={className}>
    <span>Tone</span>
    <div className="line"></div>
    <span>Row</span>
    <style jsx>{`
      h1,
      span.shadow {
        font-size: var(--h1-font-size);
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vh;
        margin: 0;
        transform: rotate(90deg);
        transform-origin: 0 0;
        position: absolute;
        left: 100%;
        top: 0;
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

      span.shadow {
        color: yellow;
      }
      span.shadow .line {
        background: yellow;
      }
      @media (min-width: 769px) {
        span.shadow {
          display: none;
        }
      }
    `}</style>
  </Tag>
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
      <style jsx>{`
        a.active {
          font-size: 1.5rem;
          line-height: 1;
        }
      `}</style>
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
      <NavLink current={current} href="/philosophy">
        Philosophy
      </NavLink>
    </ul>
  </nav>
);

const Sidebar = ({ router }) => (
  <aside>
    <div className="inner">
      <Title />
      <Nav current={router.asPath} />
    </div>
    <style jsx>{`
      aside {
        background: yellow;
        position: relative;
        overflow: hidden;
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
