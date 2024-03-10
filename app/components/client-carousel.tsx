import Image from "next/image";

const imageLinks = [
  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",
  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",
  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",

  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",

  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",

  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",

  "https://www.cubdigital.co.nz/_next/image?url=%2Fprojects%2Fstrategic.png&w=1920&q=75",

  // Add more image links as needed
];

export const ClientCarousel = () => {
  return (
    <div className="group flex space-x-16 overflow-hidden">
      {imageLinks.map((imageLink, index) => (
        <div key={index} className=" flex animate-loop-scroll space-x-16">
          <Image
            src={imageLink}
            width={200} // Specify your desired width
            height={200} // Specify your desired height
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
