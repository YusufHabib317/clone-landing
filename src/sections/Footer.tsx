import logo from "@/assets/logosaas.png";
import InstaSocial from "@/assets/social-insta.svg";
import LinkedinSocial from "@/assets/social-linkedin.svg";
import PinSocial from "@/assets/social-pin.svg";
import YoutubeSocial from "@/assets/social-youtube.svg";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div
          className="inline-flex 
              relative 
              before:content-[''] 
              before:h-full 
              before:w-full 
              before:top-0
              before:bottom-0
              before:blur
              before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd98,#c2f0b1,#2fd8fe)]
              before:absolute
              "
        >
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#">About</Link>
          <Link href="#">Feature</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>

        <div className="flex justify-center gap-6 mt-7">
          <InstaSocial />
          <LinkedinSocial />
          <PinSocial />
          <YoutubeSocial />
        </div>

        <p className="mt-6">© 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
