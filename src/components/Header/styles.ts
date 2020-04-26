import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--header-background-color);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
  height: 50px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 0 auto;
  width: 750px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    width: 95%;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Menu = styled.div`
  margin-left: 20px;

  a {
    color: var(--header-link-color);
    margin: 0 15px;
  }

  a:hover {
    color: var(--header-link-hover-color);
  }

  a:last-child {
    margin-right: 0;
  }
`;
