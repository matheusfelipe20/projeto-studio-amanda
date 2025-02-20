import { motion } from "framer-motion";
import { useEffect } from "react";

import './LoadingHome.css';

import logoLoading from '../../assets/img/logo-brown.png';

const LoadingHome = ({ onFinish }) => {
  useEffect(() => {
    // O tempo total inclui a duração da máscara (por exemplo, 2.2s)
    // e a duração do fade-out (0.6s)
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-home"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.4, ease: "easeOut" }}
    >
      <img
        src={logoLoading}
        alt="Logo"
        className="logo-loading"
      />
      <motion.div
        className="mask-loading"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: 2.2, ease: "linear" }}
      />
    </motion.div>
  );
};

export default LoadingHome;