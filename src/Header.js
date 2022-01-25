import './App.js';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as MyLogo } from './images/logo.svg';

const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;
const headerStyles = css`
  display: flex;
  position: fixed;
  top: 0;
  overflow: hidden;
  justify-content: space-between;
  width: 80vw;
  padding: 50px 10px;
  background-color: #1a1a1a;
`;
const navStyles = css`
  display: flex;
  list-style: none;
  gap: 30px;
  font-size: 18px;
`;
const anchorStyles = css`
  text-decoration: none;
  list-style: none;
  :hover {
    color: #9a66e2;
    transition: all 0.3s ease-out;
  }
`;
export default function Header() {
  return (
    <div css={mainDivStyles}>
      <header css={headerStyles}>
        <MyLogo />

        <nav>
          <ul css={navStyles}>
            <li>
              <a css={anchorStyles} href="./">
                Features
              </a>
            </li>
            <li>
              <a css={anchorStyles} href="./">
                Help
              </a>
            </li>
            <li>
              <a css={anchorStyles} href="./">
                Contact
              </a>
            </li>
            <li>
              <a css={anchorStyles} href="./">
                We're hiring!
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
