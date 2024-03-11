import Image from "next/image";

const Headstone = () => {
  return (
    <div className=" bg-black">
      <div className="headstone-wrap">
        <div className="headstone-first">
          <div className="headstone-logo">
            {/* <Image src="/logo.png" fill alt="logo" /> */}
          </div>
          <div className="headstone-title"></div>
        </div>
        <div className="headstone-second"></div>
        <div className="headstone-third"></div>
      </div>
    </div>
  );
};

export default Headstone;
