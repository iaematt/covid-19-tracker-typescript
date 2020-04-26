import React, { createContext, useContext, useState } from "react";

interface CardsContextData {
  cases: boolean;
  changeCases(): void;

  recovered: boolean;
  changeRecovered(): void;

  deaths: boolean;
  changeDeaths(): void;
}

const CardsContext = createContext<CardsContextData>({} as CardsContextData);

export const CardsProvider: React.FC = ({ children }) => {
  const [cases, setCases] = useState(true);
  const [recovered, setRecovered] = useState(true);
  const [deaths, setDeaths] = useState(true);

  function changeCases() {
    setCases(cases ? false : true);
  }

  function changeRecovered() {}

  function changeDeaths() {}

  return (
    <CardsContext.Provider
      value={{
        cases,
        changeCases,
        recovered,
        changeRecovered,
        deaths,
        changeDeaths,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export function useCards() {
  return useContext(CardsContext);
}
