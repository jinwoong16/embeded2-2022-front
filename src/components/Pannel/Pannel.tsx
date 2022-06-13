import React from "react";
import "./Pannel.css";
import { motion } from "framer-motion";

import { onoff, refresh } from "../../action/index";

import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import RemoveIcon from '@mui/icons-material/Remove';

type PannelProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTemp: React.Dispatch<React.SetStateAction<string>>;
  setHum: React.Dispatch<React.SetStateAction<string>>;
};

const Pannel = ({ setIsOpen, setTemp, setHum }: PannelProps) => {
  const _onOff = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { status } = await onoff();
    if (status === "200") setIsOpen(true);
    setTimeout(toggleState, 6000);
  };

  const _refresh = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { status, temperature, humidity } = await refresh();
    if (status === "200") {
      setTemp(temperature);
      setHum(humidity);
    }

  };
  
  const toggleState = () => setIsOpen(false);

  return (
    <div className="pannel">
      <motion.button
        className="onoff"
        onClick={_onOff}
        whileTap={{
          scale: 0.4,
          rotate: -95,
          borderRadius: "100%",
        }}
      >
        <PowerSettingsNewIcon sx={{ fontSize: 40, color: "white" }} />
      </motion.button>
      <motion.button
        onClick={_refresh}
        whileTap={{
          scale: 0.4,
          rotate: -95,
          borderRadius: "100%",
        }}
      >
        <RestartAltIcon sx={{ fontSize: 40 }} />
      </motion.button>
      <button>
        <RemoveIcon sx={{ fontSize: 40 }} />
      </button>
    </div>
  );
};

export default Pannel;
