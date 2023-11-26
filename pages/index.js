import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { Banner, CreatorCard } from "../components";
import images from "../assets";
import { makeId } from "../utils/makeId.js";

const Home = () => {
  const theme = useTheme();
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const [hideButtons, setHideButtons] = useState(false);

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offSetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => window.removeEventListener("resize", isScrollable);
  });

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
            Best Creators
          </h1>

          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <CreatorCard
                  key={`creator-${i}`}
                  rank={i}
                  creatorImage={images[`creator${i}`]}
                  creatorName={`0x0${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}

              {/* Scrolling Functionality */}
              {!hideButtons && (
                <>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minmlg:h-12 top-45 left-0 cursor-pointer"
                    onClick={() => handleScroll("left")}
                  >
                    <Image
                      src={images.left}
                      alt="left_arrow"
                      objectFit="contain"
                      layout="fill"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minmlg:h-12 top-45 right-0 cursor-pointer"
                    onClick={() => handleScroll("right")}
                  >
                    <Image
                      src={images.right}
                      alt="right_arrow"
                      objectFit="contain"
                      layout="fill"
                      className={theme === "light" && "filter invert"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
