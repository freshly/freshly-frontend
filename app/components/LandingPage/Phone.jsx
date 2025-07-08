"use client";
import { motion } from "framer-motion";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

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
        marginTop: "-200px", // Changed from -200px to -250px to move up
        marginBottom: "-289px",
        height: "600px",
        width: "100%",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "transparent", // Changed to transparent
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            position: "relative", // Added position relative
            zIndex: 1, // Lower z-index for the image
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: "58%",
            left: "51%", // Changed from 38% to 35% to move left
            transform: "translate(-50%, -50%)",
            width: "150px", // Increased from 120px
            height: "45px", // Increased from 40px
            background: `linear-gradient(
              270deg,
              #01AC66,
              #FFFFFF,
              #FD8100,
              #01AC66
            )`,
            backgroundSize: "300% 300%",
            animation: "gradient 5s ease infinite",
            borderRadius: "10px", // Slightly increased for larger button
            padding: "2px", // Border thickness
            zIndex: 2,
          }}
        >
          <button
            style={{
              width: "100%",
              height: "100%",
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "8px", // Slightly smaller to account for padding
              cursor: "pointer",
              fontSize: "16px", // Increased from 14px
              fontWeight: "600",
              fontFamily: baloo2.style.fontFamily,
              letterSpacing: "0.5px", // Added letter spacing
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}
          >
            Join the Waitlist!
          </button>
        </motion.div>

        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>
    </div>
  );
}
