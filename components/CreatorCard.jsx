import Image from "next/image";

import images from "../assets";

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => (
  <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4">
    {/* rank */}
    <div className="w-7 h-7 minlg:w-10 minlg:h-10 flexCenter bg-nft-red-violet rounded-full">
      <span className="font-poppins font-semibold text-base minlg:text-lg text-white">
        {rank}
      </span>
    </div>

    {/* Creator Image */}
    <div className="my-2 flex justify-center">
      <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
        <Image
          src={creatorImage}
          alt="creator"
          objectFit="cover"
          layout="fill"
          className="rounded-full"
        />

        {/* Official Tick
        <div className="absolute w-8 h-8 minlg:w-7 minlg:h-7  -right-3">
          <Image
            src={images.tick}
            layout="fill"
            objectFit="cover"
            alt="tickmark"
          />
        </div> */}
      </div>
    </div>

    <div className="flexCenter flex-col mt-3 minlg:mt-7 text-center">
      {/* Creator Name */}
      <p className="flexCenter font-poppins font-semibold text-base dark:text-white text-nft-black-1">
        {creatorName}
        <Image src={images.tick} width={30} height={30} objectFit="cover" />
      </p>

      {/* Creator Eth price */}
      <p className="flexCenter font-poppins font-semibold text-base dark:text-white text-nft-black-1">
        {creatorEths.toFixed(2)} &nbsp;{" "}
        <span className="font-semibold">ETH</span>
      </p>
    </div>
  </div>
);

export default CreatorCard;
