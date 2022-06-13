import "./App.css";
import React, { useState, useEffect } from "react";

import Pannel from "./components/Pannel/Pannel";
import Modal from "./components/Modal/Modal";
import TempHum from "./components/TempHum/TempHum";

import { refresh } from "./action/index";

function App() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [temp, setTemp] = useState("0°C");
  const [hum, setHum] = useState("0%");

  const isLoaded = async () => {
    const { status, temperature, humidity } = await refresh();
    if (status === "200") {
      setTemp(temperature);
      setHum(humidity);
      setLoading(true);

    }
  };

  useEffect(() => {
    isLoaded();
  }, []);

  return (
    <div className="App">
      {
        loading && 
        <>
          <TempHum temp={temp} hum={hum} />
          <Pannel setIsOpen={setIsOpen} setTemp={setTemp} setHum={setHum} />
          { isOpen && (<Modal />) }
        </>
      }
      
    </div>
  );
}

export default App;
