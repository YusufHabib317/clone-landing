import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuItem from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline Your Workflow And Boost Your Productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get Started For Free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <MenuItem className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="$">About</a>
              <a href="$">Feature</a>
              <a href="$">Customers</a>
              <a href="$">Updates</a>
              <a href="$">Help</a>
              <button className="btn btn-primary">Get For Free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
