import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import images from "../assets";
import { Button } from ".";

const FooterLinks = ({ heading, menuItems }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins font-semibold text-xl dark:text-white text-nft-black-1 mb-5">
      {heading}
    </h3>
    {menuItems.map((item, i) => (
      <p
        key={i}
        className="font-poppins font-normal text-base dark:text-white text-nft-black-1 dark:hover:text-nft-gray-2 hover:text-nft-gray-2 my-3 cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-8 ">
      <div className="flex flex-row w-full minmd:w-4/5 md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Link href="/">
              <div className="flexCenter cursor-pointer" onClick={() => {}}>
                <Image
                  src={images.logo02}
                  alt="logo"
                  objectFit="contain"
                  width={32}
                  height={32}
                />
                <span className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
                  OpenMint
                </span>
              </div>
            </Link>
          </div>
          <span className="font-poppins font-semibold mt-6 text-base dark:text-white text-nft-black-1">
            Get the latest Updates
          </span>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full w-full flex-1 dark:bg-nft-black-2 bg-white px-4 dark:text-white text-nft-black-1 rounded-md font-normal text-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button btnName="Email me" classStyles="rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="OpenMint"
            menuItems={["Explore NFTs", "Listed NFTs", "My NFTs"]}
          />
          <FooterLinks
            heading="Support"
            menuItems={[
              "Help Center",
              "Terms of service",
              "Legal",
              "Privacy Policy",
            ]}
          />
        </div>
      </div>

      {/* Copyright space */}
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins font-semibold text-base dark:text-white text-nft-black-1">
            OpenMint, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
            ].map((image, i) => (
              <div key={i} className="mx-2 cursor-pointer">
                <Image
                  src={image}
                  alt="social"
                  width={24}
                  height={24}
                  objectFit="contain"
                  className={theme === "light" && "filter invert"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
