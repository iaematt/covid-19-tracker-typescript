import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--footer-background-color);
  color: var(--footer-text-color);
  padding: 0 0 20px;
  width: 100%;
  margin-top: 30px;
  border-top: 1px solid #282828;

  a {
    color: var(--footer-link-color);
  }
  a:hover {
    color: var(--footer-link-hover-color);
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  width: 750px;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

/* SocialLinks */
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;

  @media screen and (max-width: 740px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: 740px) {
    margin: 10px 0;
  }
`;
export const Icon = styled.div``;
export const Link = styled.div`
  margin: 10px 0 0;
`;

/* Copyright */
export const Copyright = styled.div`
  align-items: center;
  border-top: 1px solid #222;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 15px;

  @media screen and (max-width: 740px) {
    flex-direction: column-reverse;
  }
`;
export const CopyText = styled.p`
  @media screen and (max-width: 740px) {
    text-align: center;
    margin-top: 10px;
  }
`;
export const CopyLinks = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: lowercase;

  a {
    margin: 0 5px;
  }

  a:last-child {
    margin-right: 0;
  }
  a:first-child {
    margin-left: 0;
  }

  span {
    background: #292929;
    display: block;
    height: 8px;
    margin: 5px;
    width: 1px;
  }
`;
