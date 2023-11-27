import Image from "next/image";
import Link from "next/link";

import images from "../assets";

const NFTCard = ({ nft }) => (
  <Link href={{ pathname: "/nft-details", query: { nft } }}>
    <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white p-4 m-4 minlg:m-8 sm:m-2 rounded-2xl cursor-pointer shadow-md">
      <div className="relative w-full h-52 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
        <Image
          src={nft.image || images[`nft${nft.i}`]}
          alt={`nft${nft.i}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col mt-3">
        <p className="font-poppins font-semibold text-sm minlg:text-xl dark:text-white text-nft-black-1">
          {nft.name}
        </p>
        <div className="flexBetween flex-row mt-1 minlg:mt-3 xs:flex-col xs:items-start xs:mt-3">
          <p className="font-poppins font-semibold text-xs minlg:text-lg dark:text-white text-nft-black-1">
            {nft.price}
            <span className="normal">ETH</span>
          </p>
          <p className="font-poppins font-semibold text-xs minlg:text-lg dark:text-white text-nft-black-1">
            {nft.seller}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default NFTCard;
