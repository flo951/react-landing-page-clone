/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyles = css`
  color: gray;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  width: 80vw;
`;
const sectStyles = css`
  margin: 10px;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a;
  width: 80vw;
`;
const anchorStyles = css`
  text-decoration: none;
  list-style: none;
  :hover {
    color: #9a66e2;
    transition: all 0.3s ease-out;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div css={sectStyles}>
        <h4>ClipDrop (AR Copy Paste)</h4>
        <a css={anchorStyles} href="./">
          Features
        </a>
        <a css={anchorStyles} href="./">
          Features
        </a>
        <a css={anchorStyles} href="./">
          Features
        </a>
      </div>
      <div css={sectStyles}>
        <h4>Support</h4>
        <a css={anchorStyles} href="./">
          Features
        </a>
      </div>
      <div css={sectStyles}>
        <h4>Legal</h4>
        <a css={anchorStyles} href="./">
          Features
        </a>
        <a css={anchorStyles} href="./">
          Features
        </a>
      </div>
      <div css={sectStyles}>
        <h4>Social</h4>
        <a css={anchorStyles} href="./">
          Twitter
        </a>
        <a css={anchorStyles} href="./">
          Product Hunt
        </a>
        <a css={anchorStyles} href="./">
          Instagram
        </a>
        <a css={anchorStyles} href="./">
          GitHub
        </a>
      </div>
    </footer>
  );
}
