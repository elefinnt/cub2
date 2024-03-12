import Image from "next/image";

interface ImageTextData {
  whiteText: string;
  yellowText?: string;
  image: string;
}

interface ImageTextProps {
  imageTextData: ImageTextData;
}

const ImageWithText: React.FC<ImageTextProps> = ({ imageTextData }) => {
  return (
    <>
      <div className="relative w-full min-h-full">
        <div className="relative h-[480px] flex justify-start">
          <Image
            src={imageTextData.image}
            fill
            alt={imageTextData.image}
            className="object-cover absolute"
          />
          <div className="px-[189px]">
            <h2 className="text-content relative text-white max-w-3xl">
              {imageTextData.whiteText}
              <span className="text-[#ffdb3b]">
                {" "}
                {imageTextData.yellowText}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageWithText;
