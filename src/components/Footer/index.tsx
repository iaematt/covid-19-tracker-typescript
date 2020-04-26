import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaFreeCodeCamp,
} from "react-icons/fa";

import {
  Container,
  Content,
  SocialLinks,
  Box,
  Icon,
  Link,
  Copyright,
  CopyText,
  CopyLinks,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <SocialLinks>
          <a
            href="https://github.com/iaematt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box>
              <Icon>
                <FaGithub size={30} />
              </Icon>
              <Link>
                github/<strong>iaematt</strong>
              </Link>
            </Box>
          </a>

          <a
            href="https://fb.me/iaematt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box>
              <Icon>
                <FaFacebook size={30} />
              </Icon>
              <Link>
                facebook/<strong>iaematt</strong>
              </Link>
            </Box>
          </a>

          <a
            href="https://instagram.com/iaematt_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box>
              <Icon>
                <FaInstagram size={30} />
              </Icon>
              <Link>
                instagram/<strong>iaematt_</strong>
              </Link>
            </Box>
          </a>

          <a
            href="https://devbsb.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box>
              <Icon>
                <FaFreeCodeCamp size={30} />
              </Icon>
              <Link>
                <strong>devbsb</strong>.com.br
              </Link>
            </Box>
          </a>
        </SocialLinks>

        <Copyright>
          <CopyText>
            Copyright © 2020{" "}
            <a
              href="https://devbsb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevBSB
            </a>{" "}
            — Todos os direitos reservados.
          </CopyText>
          <CopyLinks>
            <a href="mailto:mat@devbsb.com.br">mat@devbsb.com.br</a>
            <span></span>
            <a
              href="https://github.com/iaematt/covid-19-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              apoiar
            </a>
            <span></span>
            <em>Versão 2.0</em>
          </CopyLinks>
        </Copyright>
      </Content>
    </Container>
  );
};

export { Footer };
