import React from 'react'
import { motion } from "framer-motion";
import CheckIcon from '@mui/icons-material/Check';
import "./Modal.css"

const Modal = () => {
  return (
    <motion.div 
      className="Modal" 
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{
        repeat: 1,
        repeatType: "reverse",
        duration: 1,
        repeatDelay: 3,
      }}
    >
      <div>
        <CheckIcon sx={{ color: "green" }} />
        <p>Done !</p>
      </div>
    </motion.div>
  )
}

export default Modal