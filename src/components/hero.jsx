import {
    blueZigzagIcon,
  boardImg,
  circleIcon,
  kidHeroIndexImg,
  redWaveIcon,
  yellowWaveIcon,
} from "../constants/media";

export const Hero = () => {
  return (
    <section className="w-full flex relative flex-col-reverse py-10 gap-10 lg:gap-0 items-center justify-center lg:flex-row px-spacing-normal xl:px-spacing-large">
        <img src={blueZigzagIcon} alt="" className="absolute bottom-10 -left-40 lg:left-0 h-16 lg:h-28" />

      <div className="basis-1/2 flex flex-col items-center lg:items-start gap-10">
        <div className="w-4/5 aspect-square relative flex items-center justify-center">
          <img
            alt=""
            src={boardImg}
            className="w-full h-full object-contain absolute"
          />
          <img
            alt=""
            src={kidHeroIndexImg}
            className="w-full h-full object-contain absolute"
          />
        </div>

        <p className="lg:w-4/5 rounded-3xl p-6 bg-white lg:translate-x-[65%] lg:-translate-y-40 lg:text-xl relative">
          This isn&#39;t just another camp. It&#39;s a launchpad for your
          child&#39;s entrepreneurial journey. At Kidpreneur Bootcamp, we help
          kids explore their creativity, learn real-world skills, and build the
          confidence to lead.
          {/* <img
            src={circleIcon}
            alt=""
            className="absolute -top-6 lg:-top-10 -right-6 lg:-right-10 z-10 w-14 lg:w-20"
          /> */}
        </p>

        <button className="px-10 py-3 lg:hidden rounded-full bg-pink-normal text-center font-semibold text-xl capitalize">
          enroll your child now
        </button>
      </div>

      <div className="basis-[80%] flex gap-6 flex-col items-end">
        <p className="text-xl lg:text-3xl">Welcome to Kidpreneur Bootcamp:</p>

        <h2 className="flex flex-col capitalize text-7xl lg:text-9xl">
          <p className="flex gap-2 flex-col relative lg:flex-row items-center lg:items-end ">
            <span className="text-2xl lg:text-5xl mb-2">where</span>
            big ideas
            <img
              src={redWaveIcon}
              alt=""
              className="absolute rotate-90 -bottom-16 right-14 object-bottom"
            />
          </p>

          <p className="flex gap-2 items-start justify-end">
            <span className="text-2xl lg:text-5xl mt-2">meet</span>
            <p className="flex flex-col items-end">
              <span className="">young</span>
              <span className="flex relative">
                minds
                <img
                  alt=""
                  src={yellowWaveIcon}
                  className="absolute -bottom-14 lg:-bottom-16 rotate-90 w-2 lg:w-3 right-12 lg:right-60 object-contain object-bottom"
                />
              </span>
            </p>
          </p>
        </h2>

        <button className="px-10 py-3 hidden lg:flex rounded-full bg-pink-normal text-center font-semibold text-xl capitalize">
          enroll your child now
        </button>
      </div>
    </section>
  );
};
