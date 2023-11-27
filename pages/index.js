/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Banner, CreatorCard, NFTCard } from "../components";
import images from "../assets";
import { makeId, makeNumbers } from "../utils/makeId.js";

const nftCreators = [
  "EtherGem",
  "CryptoEthos",
  "EtherPulse",
  "NFTether",
  "EtherealMint",
  "EtherLoom",
  "CryptoSpectra",
  "EthVista",
  "EtherCraft",
  "CryptoAegis",
];

const Home = () => {
  const { theme } = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);

  // const [hideButtons, setHideButtons] = useState(false);

  // const isScrollable = () => {
  //   const { current } = scrollRef;
  //   const { current: parent } = parentRef;

  //   if (current?.scrollWidth >= parent?.offSetWidth) {
  //     setHideButtons(false);
  //   } else {
  //     setHideButtons(true);
  //   }
  // };

  // useEffect(() => {
  //   isScrollable();
  //   window.addEventListener("resize", isScrollable);

  //   return () => window.removeEventListener("resize", isScrollable);
  // });

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="flex justify-center sm:px-4 p-12">
      {/* Banner */}
      <div className="w-9/12 minmd:w-4/5">
        <Banner
          name="Buy, sell, and discover exclusive NFTs"
          parentStyles="justify-start mb-6 p-12 h-72 sm:h-60 xs:h-44 xs:p-4 rounded-3xl"
          childStyles="md:text-3xl sm:text-2xl xs:text-lg text-left text-white"
        />

        {/* Best Creators */}
        <div>
          <h1 className="font-poppins font-semibold text-2xl minlg:text-4xl ml-4 xs:ml-0 dark:text-white text-nft-black-1">
            Top Creators
          </h1>

          <div
            className="relative flex-1 max-w-full flex mt-3 group"
            ref={parentRef}
          >
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  // creatorName={`0x0${makeId(3)}...${makeId(4)}`}
                  creatorName={nftCreators[i - 1]}
                  creatorEths={10 - i * 0.5}
                />
              ))}

              {/* Scrolling Functionality */}
              {/* {!hideButtons && ( */}
              <div
                className="absolute w-8 h-8 minlg:w-12 minmlg:h-12 top-45 left-0 cursor-pointer hidden group-hover:block"
                onClick={() => handleScroll("left")}
              >
                <Image
                  src={images.left}
                  alt="left_arrow"
                  objectFit="contain"
                  layout="fill"
                  // className={theme === "light" && "filter invert"}
                  className={theme === "light" ? "filter invert" : ""}
                />
              </div>
              <div
                className="absolute w-8 h-8 minlg:w-12 minmlg:h-12 top-45 right-0 cursor-pointer hidden group-hover:block"
                onClick={() => handleScroll("right")}
              >
                <Image
                  src={images.right}
                  alt="right_arrow"
                  objectFit="contain"
                  layout="fill"
                  // className={theme === "light" && "filter invert"}
                  className={theme === "light" ? "filter invert" : ""}
                />
              </div>
              {/* )}   */}
            </div>
          </div>
        </div>

        {/* Trending NFTs */}
        <div className="mt-10">
          <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="flex-1 before:first:font-poppins font-semibold text-2xl minlg:text-4xl dark:text-white text-nft-black-1 sm:mb-4">
              Trending NFTs
            </h1>
            <div>Searchbar</div>
          </div>

          <div className="flex flex-wrap mt-3 w-full justify-start md:justify-center">
            {makeNumbers(22).map((i) => (
              <NFTCard
                key={`nft-${i}`}
                nft={{
                  i,
                  name: `Nifty NFT ${i}`,
                  seller: nftCreators[i],
                  owner: nftCreators[i],
                  price: (10 - i * 0.357).toFixed(3),
                  description: "Cool NFT on Sale!",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
