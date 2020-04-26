import React from "react";
import Moment from "react-moment";
import { FaRedoAlt } from "react-icons/fa";

import { useApi } from "../../contexts/api";
import { Container, Text, Update } from "./styles";

const Title: React.FC = () => {
  const { brazil, updateData } = useApi();

  return (
    <Container>
      <Text>
        <h1>
          Painel <span>Coronavírus</span>
        </h1>

        <p>
          Última atualização <Moment fromNow>{brazil?.updated_at}</Moment>
        </p>
      </Text>
      <Update>
        <FaRedoAlt size={20} onClick={updateData} />
      </Update>
    </Container>
  );
};

export { Title };
