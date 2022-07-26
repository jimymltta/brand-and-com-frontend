import Image from "next/image";
import logo from "../public/logo.png";

// Icons imports
import { BsChevronDown } from "react-icons/bs";

// helpers imports
import { handleClick } from "../helpers/functions";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("./hero-img.png")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Image
              src={logo}
              alt="Brand&Com logo"
              width={200}
              height={200}
              placeholder="blur"
            />
            <h1 className="mb-5 text-5xl font-bold text-white">
              Brand&Com s'occupe de votre image et de votre visibilité
            </h1>
            <p className="mb-5 text-white">
              Brand&Com, basé à Amiens, vous propose des services de marketing
              digital et de brand management : community management,
              amélioration de notoriété et toutes activités de marketing
              digital.
            </p>
            <button
              className="btn bg-primary hover:bg-hover border-primary text-white"
              onClick={handleClick}
            >
              Ça m'intéresse
            </button>
            <BsChevronDown className="mx-auto mt-8 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
