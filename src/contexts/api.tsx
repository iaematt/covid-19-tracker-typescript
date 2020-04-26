import React, { createContext, useState, useContext, useEffect } from "react";

import { covid19Brazil, covid19Global } from "../services/api";

interface Brazil {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
}

interface States {
  uid: number;
  uf: string;
  state: string;
  cases: string;
  deaths: number;
  suspects: number;
  refuses: number;
  datetime: string;
}

interface Daily {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

interface Colors {
  cases: string;
  recovered: string;
  deaths: string;
}

interface ApiContextData {
  brazil: Brazil | null;
  colors: Colors | null;
  dailys: Daily[] | null;
  loading: boolean;
  states: States[] | null;

  showCases: boolean;
  changeCases(): void;
  showRecovered: boolean;
  changeRecovered(): void;
  showDeaths: boolean;
  changeDeaths(): void;

  updateData(): Promise<void>;
}

const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider: React.FC = ({ children }) => {
  const [brazil, setBrazil] = useState<Brazil | null>(null);
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState<States[] | []>([]);
  const [dailys, setDailys] = useState<Daily[] | []>([]);
  const [colors, setColors] = useState<Colors | null>(null);

  const [showCases, setShowCases] = useState(true);
  const [showRecovered, setShowRecovered] = useState(true);
  const [showDeaths, setShowDeaths] = useState(true);

  useEffect(() => {
    async function loadBrazilData() {
      const brazilLocal = await localStorage.getItem("brazil");

      if (!brazilLocal) {
        const {
          data: { data },
        } = await covid19Brazil.get("/api/report/v1/brazil");

        await localStorage.setItem("brazil", JSON.stringify(data));

        setBrazil(data);
      } else {
        setBrazil(JSON.parse(brazilLocal));
      }

      setLoading(false);
    }

    async function loadStateData() {
      const statesLocal = await localStorage.getItem("states");

      if (!statesLocal) {
        const {
          data: { data },
        } = await covid19Brazil("/api/report/v1");

        await localStorage.setItem("states", JSON.stringify(data));

        setStates(data);
      } else {
        setStates(JSON.parse(statesLocal));
      }
    }

    async function loadDailyData() {
      const dailysLocal = await localStorage.getItem("dailys");

      if (!dailysLocal) {
        const {
          data: { Brazil },
        } = await covid19Global("/covid19/timeseries.json");

        await localStorage.setItem(
          "dailys",
          JSON.stringify(Brazil.slice(-20, Brazil.lenght))
        );
        setDailys(Brazil.slice(-20, Brazil.lenght));
      } else {
        setDailys(JSON.parse(dailysLocal));
      }
    }

    setColors({
      cases: "#4285f4",
      deaths: "#ea4335",
      recovered: "#34a853",
    });

    loadDailyData();
    loadBrazilData();
    loadStateData();
  }, []);

  function changeCases() {
    setShowCases(showCases ? false : true);
  }

  function changeRecovered() {
    setShowRecovered(showRecovered ? false : true);
  }

  function changeDeaths() {
    setShowDeaths(showDeaths ? false : true);
  }

  async function updateData() {
    const responseBrazil = await covid19Brazil.get("/api/report/v1/brazil");
    await localStorage.setItem(
      "brazil",
      JSON.stringify(responseBrazil.data.data)
    );
    setBrazil(responseBrazil.data.data);

    const responseStates = await covid19Brazil("/api/report/v1");
    await localStorage.setItem(
      "states",
      JSON.stringify(responseStates.data.data)
    );
    setStates(responseStates.data.data);

    const responseDailys = await covid19Global("/covid19/timeseries.json");

    await localStorage.setItem(
      "dailys",
      JSON.stringify(
        responseDailys.data.Brazil.slice(-20, responseDailys.data.Brazil.lenght)
      )
    );
    setDailys(
      responseDailys.data.Brazil.slice(-20, responseDailys.data.Brazil.lenght)
    );
  }

  return (
    <ApiContext.Provider
      value={{
        brazil,
        colors,
        dailys,
        loading,
        states,
        showCases,
        changeCases,
        showRecovered,
        changeRecovered,
        showDeaths,
        changeDeaths,
        updateData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export function useApi() {
  return useContext(ApiContext);
}
