import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ApiProvider } from "./contexts/api";
import GlobalStyle from "./styles/global";
import {
  BarChart,
  Cards,
  Footer,
  Header,
  LineChart,
  Title,
} from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ApiProvider>
        <GlobalStyle />
        <Header />

        <Title />
        <Cards />
        <LineChart />
        <BarChart />

        <Footer />
      </ApiProvider>
    </BrowserRouter>
  );
};

export default App;
