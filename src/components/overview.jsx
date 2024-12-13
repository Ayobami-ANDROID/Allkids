import Marquee from "react-fast-marquee";
import { overviews } from "../constants/config";
import { greenDiamondIcon, redWaveDoubleIcon } from "../constants/media";

export const Overview = () => {
  return (
    <section className="w-full py-10 gap-10 flex flex-col items-center px-spacing-normal">
      <>
        <Marquee className="gap-4 whitespace-nowrap overflow-hidden">
          <p className="gap-8 text-8xl whitespace-nowrap items-center hidden lg:flex">
            Who&#39;s This For?
            <img
              alt=""
              src={greenDiamondIcon}
              className="w-16 object-contain"
            />
            Who&#39;s This For?
          </p>
        </Marquee>

        <h2 className="flex text-7xl lg:hidden">Who&#39;s This For?</h2>
      </>

      <h3 className="text-4xl w-4/5 lg:w-auto mr-auto lg:mr-0">
        Kidpreneur Bootcamp is perfect for kids who are
      </h3>

      <div className="w-full px-spacing-normal flex flex-wrap items-center gap-10 lg:grid grid-cols-3">
        {overviews.map((item, index) => (
          <div
            key={item.title}
            className={`${item.className} flex-1 relative basis-80 rounded-3xl flex flex-col lg:flex-row items-center justify-center px-5 gap-6`}
          >
            <img
              alt=""
              loading="lazy"
              src={item.image}
              className={`flex-none rounded-xl lg:w-2/5 p-4 w-60 h-40 lg:p-0 lg:h-80 object-contain object-bottom ${item.imgClassName}`}
            />
            <p className="text-xl lg:text-2xl my-auto">{item.title}</p>

            <img
              src={redWaveDoubleIcon}
              alt=""
              className={`absolute bottom-32 lg:bottom-10 h-8 lg:h-10 odd:-right-10 lg:-right-10 lg:left-auto ${
                index % 2 === 0 ? "-right-10" : "-left-10"
              }`}
            />
          </div>
        ))}
      </div>

      <button className="px-10 py-3 rounded-full bg-red-normal text-white text-lg">
        Join the waitlist
      </button>
    </section>
  );
};
