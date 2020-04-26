import React from "react";
import { Bar } from "react-chartjs-2";

import { useApi } from "../../contexts/api";
import { Container, Title, Content } from "./styles";

const BarChart: React.FC = () => {
  const { states, colors, showCases, showDeaths, showRecovered } = useApi();

  const uf = states?.map(({ uf }) => uf);
  const cases = states?.map(({ cases }) => cases);
  const refuses = states?.map(({ refuses }) => refuses);
  const deaths = states?.map(({ deaths }) => deaths);

  return (
    <Container>
      <Title>
        Casos <span>por estados</span>
      </Title>

      <Content>
        {states && colors ? (
          <Bar
            data={{
              labels: uf,
              datasets: [
                {
                  label: "Mortes",
                  data: showDeaths && deaths,
                  backgroundColor: colors?.deaths,
                  borderColor: colors?.deaths,
                },
                {
                  label: "Curados",
                  data: showRecovered && refuses,
                  backgroundColor: colors?.recovered,
                  borderColor: colors?.recovered,
                },
                {
                  label: "Casos",
                  data: showCases && cases,
                  backgroundColor: colors?.cases,
                  borderColor: colors?.cases,
                },
              ],
            }}
            options={{
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      color: "#292929",
                      zeroLineColor: "#191919",
                    },
                    stacked: true,
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      color: "#292929",
                      zeroLineColor: "#191919",
                    },
                    stacked: true,
                  },
                ],
              },
              legend: {
                display: false,
                labels: {
                  boxWidth: 20,
                  fontColor: "#999999",
                  padding: 10,
                },
              },
              title: {
                display: false,
              },
            }}
          />
        ) : (
          <span>Carregando..</span>
        )}
      </Content>
    </Container>
  );
};

export { BarChart };
