import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
  width: 750px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 240px;
  background-color: #222222;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  border: 1px solid ${(props) => props.color};
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    width: 95%;
    margin: 5px auto;
  }

  :hover {
    opacity: 1;
  }
`;

export const Header = styled.div`
  background-color: ${(props) => props.color};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 18px;
    padding: 3px 7px;
    background-color: rgba(255, 255, 255, 0.9);
    color: ${(props) => props.color};
    border-radius: 2px;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    color: ${(props) => props.color};
  }
`;
