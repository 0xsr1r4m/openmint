const Banner = ({ name, parentStyles, childStyles }) => (
  <div
    className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}
  >
    <p className={`font-bold font-poppins text-6xl leading-70 ${childStyles}`}>
      {name}
    </p>

    {/* Left circle */}
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-20 -left-20 -z-5" />

    {/* Right circle */}
    <div className="absolute w-72 h-72 sm:w-44 sm:h-44 rounded-full white-bg -bottom-32 -right-36 -z-5" />
  </div>
);

export default Banner;
