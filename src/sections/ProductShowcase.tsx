"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { SectionHeading, Tag } from "@/components";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -250]);

  return (
    <section
      ref={productShowcaseRef}
      className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="sec-heading">
          <div className="flex justify-center">
            <Tag text="Boost your productivity" />
          </div>
          <SectionHeading
            sectionTitle="A more effective way to track progress"
            sectionDesc=" Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template."
          />
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid image"
            width={262}
            height={262}
            className="hidden md:block absolute -top-36 -right-36 "
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube image"
            width={248}
            height={248}
            className="hidden md:block md:absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
