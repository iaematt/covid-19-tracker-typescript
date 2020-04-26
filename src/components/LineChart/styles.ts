import styled from "styled-components";

export const Container = styled.div`
  background-color: #222222;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
  margin: 15px auto;
  width: 750px;
  border: 1px solid #282828;

  @media screen and (max-width: 750px) {
    width: 95%;
  }
`;

export const Title = styled.h1`
  color: var(--charts-title-color);
  font-size: 16px;
  padding: 7px 10px;
  background-color: #282828;

  span {
    font-weight: 400;
  }
`;

export const Content = styled.div`
  padding: 10px 5px;
`;
