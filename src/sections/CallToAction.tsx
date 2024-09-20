"use client";

import { SectionHeading } from "@/components";
import ArrowRight from "@/assets/arrow-right.svg";
import starImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -250]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="sec-heading relative">
          <SectionHeading
            sectionTitle="Sign up for free today"
            sectionDesc="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts"
          />
          <motion.img
            src={starImg.src}
            alt="start image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImg.src}
            alt="spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY: translateY,
            }}
          />
          <div className="flex gap-2 mt-10 justify-center">
            <button className="btn btn-primary">Got for free</button>
            <button className="btn btn-text">
              <span>Learn more</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
