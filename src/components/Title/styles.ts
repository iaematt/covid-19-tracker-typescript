import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  margin: 30px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    width: 95%;
  }
`;

export const Text = styled.div`
  h1 {
    color: var(--title-color);

    span {
      font-weight: 400;
    }
  }

  p {
    color: var(--title-text-color);
  }
`;

export const Update = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  svg:hover {
    transform: rotate(340deg);
  }
`;
