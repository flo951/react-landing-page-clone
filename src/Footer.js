/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  h4 {
    color: gray;
    margin-bottom: 10px;
  }
`;
const footerStyles = css`
  color: gray;
  font-size: 14px;
  margin-top: 10rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: stretch;
  background-color: #1a1a1a;
  width: 70vw;
  h4 {
    margin-bottom: 20px;
  }
`;
const sectStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 25%;
  background-color: #1a1a1a;
`;
const anchorStyles = css`
  text-decoration: none;
  list-style: none;
  margin-bottom: 2rem;
  :hover {
    color: #9a66e2;
    transition: all 0.3s ease-out;
  }
`;

export default function Footer() {
  return (
    <>
      <div css={mainDivStyles}>
        <footer css={footerStyles}>
          <div css={sectStyles}>
            <h4>ClipDrop (AR Copy Paste)</h4>
            <a css={anchorStyles} href="./">
              Features
            </a>
            <a css={anchorStyles} href="./">
              Affiliate Program
            </a>
            <a css={anchorStyles} href="./">
              Press Kit
            </a>
          </div>
          <div css={sectStyles}>
            <h4>Support</h4>
            <a css={anchorStyles} href="./">
              Help
            </a>
            <a css={anchorStyles} href="./">
              Contact Us
            </a>
          </div>
          <div css={sectStyles}>
            <h4>Legal</h4>
            <a css={anchorStyles} href="./">
              Privacy Policy
            </a>
            <a css={anchorStyles} href="./">
              Terms of Use
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
      </div>
      <div css={mainDivStyles}>
        <h4>Copyright 2020 © Init ML</h4>
      </div>
    </>
  );
}
