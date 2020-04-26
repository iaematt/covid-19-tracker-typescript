import React from "react";
import CountUp from "react-countup";

import { useApi } from "../../contexts/api";
import { Container, Card, Header, Content } from "./styles";

const Cards: React.FC = () => {
  const {
    brazil,
    colors,
    changeCases,
    changeDeaths,
    changeRecovered,
  } = useApi();

  return (
    <Container>
      <Card color={colors?.cases} onClick={changeCases}>
        <Header color={colors?.cases}>
          <h1>Ativos</h1>
        </Header>
        <Content color={colors?.cases}>
          <h1>
            {brazil?.cases && <CountUp end={brazil.cases} separator="." />}
          </h1>
        </Content>
      </Card>

      <Card color={colors?.recovered} onClick={changeRecovered}>
        <Header color={colors?.recovered}>
          <h1>Curados</h1>
        </Header>
        <Content color={colors?.recovered}>
          <h1>
            {brazil?.recovered && (
              <CountUp end={brazil.recovered} separator="." />
            )}
          </h1>
        </Content>
      </Card>

      <Card color={colors?.deaths} onClick={changeDeaths}>
        <Header color={colors?.deaths}>
          <h1>Mortes</h1>
        </Header>
        <Content color={colors?.deaths}>
          <h1>
            {brazil?.deaths && <CountUp end={brazil.deaths} separator="." />}
          </h1>
        </Content>
      </Card>
    </Container>
  );
};

export { Cards };
