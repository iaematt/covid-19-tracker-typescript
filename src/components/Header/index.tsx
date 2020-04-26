import React from "react";
import { Link } from "react-router-dom";

import { Container, Content, Logo, Menu } from "./styles";

const logo = require("../../assets/logo.png");

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={logo} />
        </Link>

        <Menu>
          <a
            href="https://devbsb.com.br/contato"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
          <a
            href="https://github.com/iaematt/covid-19-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apoiar
          </a>
        </Menu>
      </Content>
    </Container>
  );
};

export { Header };
