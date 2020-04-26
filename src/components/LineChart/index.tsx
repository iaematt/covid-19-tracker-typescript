import React from "react";
import { Line } from "react-chartjs-2";

import { useApi } from "../../contexts/api";
import { Container, Title, Content } from "./styles";

const LineChart: React.FC = () => {
  const { dailys, colors, showCases, showDeaths, showRecovered } = useApi();

  const date = dailys?.map(({ date }) => date);
  const confirmed = dailys?.map(({ confirmed }) => confirmed);
  let deaths = dailys?.map(({ deaths }) => deaths);
  const recovered = dailys?.map(({ recovered }) => recovered);

  return (
    <Container>
      <Title>
        Casos <span>acumulados</span>
      </Title>

      <Content>
        <Line
          height={150}
          data={{
            labels: date,
            datasets: [
              {
                data: showCases && confirmed,
                label: "Casos",
                borderColor: colors?.cases,
                fill: true,
                pointBackgroundColor: colors?.cases,
                borderWidth: 2,
                spanGaps: false,
              },
              {
                data: showDeaths && deaths,
                label: "Mortes",
                borderColor: colors?.deaths,
                fill: true,
                pointBackgroundColor: colors?.deaths,
                borderWidth: 2,
              },
              {
                data: showRecovered && recovered,
                label: "Curados",
                borderColor: colors?.recovered,
                pointBackgroundColor: colors?.recovered,
                fill: true,
                borderWidth: 2,
              },
            ],
          }}
          options={{
            animation: {
              easing: "linear",
              duration: 1000,
            },
            legend: {
              display: false,
              labels: {
                boxWidth: 20,
                fontColor: "#999999",
                padding: 10,
                display: false,
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "#292929",
                    zeroLineColor: "#191919",
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    color: "#292929",
                    zeroLineColor: "#191919",
                  },
                },
              ],
            },
          }}
        />
      </Content>
    </Container>
  );
};

export { LineChart };
