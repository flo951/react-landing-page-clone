/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import laurent from './images/laurenteymard.jpeg';
import santiago from './images/santiagobocanegra.jpeg';
import chloe from './images/chloelebonnois.jpeg';
const mainDivStyles = css`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
`;
const quickDemoStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;
const cardStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;
const commentCardStyles = css`
  display: flex;
  width: 30vw;
`;
const imageStyles = css`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 10px;
`;
const imgHeading = css`
  display: flex;
`;
const nameStyles = css`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: gray;
  }
  h4 {
    font-size: 19px;
    margin-bottom: 10px;
    color: #6131ea;
  }
  p {
    font-size: 20px;
    line-height: 25px;
    padding: 1rem;
    margin-top: 30px;
    margin-left: 0;
    color: gray;
  }
  p: before {
    color: #6131ea;
    content: '“';
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
`;
export default function CommentCards() {
  return (
    <div css={mainDivStyles}>
      <section css={quickDemoStyles}>
        <h2>They love ClipDrop</h2>

        <div css={cardStyles}>
          <div css={commentCardStyles}>
            <div css={nameStyles}>
              <div css={imgHeading}>
                <img css={imageStyles} alt="laurenteymard" src={laurent} />
                <div>
                  <h3>Laurent Eymard</h3>
                  <h4>CEO and co-founder at red-dolphin.ch</h4>
                </div>
              </div>
              <p>
                Thanks to ClipDrop, I don't have to setup my mini light box each
                time I need a good picture of a new product on my website. I can
                take a picture of the object on any background, and get a
                perfect result immediately.
              </p>
            </div>
          </div>

          <div css={commentCardStyles}>
            <div css={nameStyles}>
              <div css={imgHeading}>
                <img css={imageStyles} alt="santiagobocanegra" src={santiago} />
                <div>
                  <h3>Santiago Bocanegra</h3>
                  <h4>Marketing Director at SEM Team</h4>
                </div>
              </div>
              <p>
                ClipDrops allows me to shoot products directly in the store of
                my customers. I can check how it will look online immediately
                and reshoot until the result is perfect. And when I'm back in my
                office all the product are already on my desktop"
              </p>
            </div>
          </div>

          <div css={commentCardStyles}>
            <div css={nameStyles}>
              <div css={imgHeading}>
                <img css={imageStyles} alt="chloelebonnois" src={chloe} />
                <div>
                  <h3>Chloe Le Bonnois</h3>
                  <h4>Director at L'Appartement by Nana Ki</h4>
                </div>
              </div>
              <p>
                I love ClipDrop, it is just amazing. I am actually using it for
                my e-shop, so much easier and faster to get flat pic with no
                background; I have even advised it to webmaster friends, I think
                it can be so useful to them; and the membership yearly is not
                expensive for what it is.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
