"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

let hasShownLoading = false;

export default function PageWrapper({ children }) {
  const [loaded, setLoaded] = useState(hasShownLoading);
  const [showLoading] = useState(!hasShownLoading);

  return (
    <>
      {showLoading && (
        <LoadingScreen
          onComplete={() => {
            hasShownLoading = true;
            setLoaded(true);
          }}
        />
      )}
      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: showLoading ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: showLoading ? 0.6 : 0, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
