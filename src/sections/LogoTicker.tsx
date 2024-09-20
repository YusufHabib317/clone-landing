"use client";

import Image from "next/image";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden maskImageToRight">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="celestial Logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="apex Logo"
            />
            {/*  */}
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acme Logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum Logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="echo Logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="celestial Logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="pulse Logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="apex Logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
