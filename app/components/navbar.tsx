import { FlagIcon } from "lucide-react";
import { Logo } from "./logo";
import { MainNav } from "./main-nav";

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="container mx-auto flex items-center justify-center py-4">
        <div className="text-white mr-20">
          <Logo />
        </div>
        <MainNav />
        <div className="ml-[15px] mr-[30px]">
          <button className="text-white py-[10px] px-5 border border-white">
            Contact Us
          </button>
        </div>
      </nav>
    </div>
    // <div className="border-black border bg-black">
    //   <div className="flex h-16 items-center px-5 py-[10px]">
    //     <Logo />
    //     <MainNav className="mx-6" />
    //     {/* <div className="ml-auto flex items-center space-x-4">Contact Us</div> */}
    //   </div>
    // </div>
  );
};

export default Navbar;
