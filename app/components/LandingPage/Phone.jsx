"use client";
import { motion } from "framer-motion";

export default function Phone() {
  return (
    <div
      className="phone-container"
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "-200px", // Reduced negative margin to move phone down
        marginBottom: "-300px",
        height: "600px",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <img
        src="/ClearIphone.png"
        alt="Clear iPhone"
        style={{
          width: "500px",
          maxWidth: "98%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
