import { blueWaveTrippleIcon } from "../constants/media";
import { WaitlistForm } from "./forms/waitlist";

export const Enroll = () => {
  return (
    <section className="w-full flex flex-col bg-white pb-28 lg:pb-0 2xl:px-spacing-small">
      <div className="w-full flex gap-10 items-start flex-col-reverse lg:flex-row">
        <div className="basis-80 flex flex-1 flex-col justify-center gap-10 p-spacing-small lg:pl-spacing-normal">
          <p className="text-2xl">
            We believe young minds have the power to make a big impact. With the
            right guidance, they can become creators, innovators, and leaders of
            tomorrow. This isn&#39;t just a camp—it&#39;s a toolkit for lifelong
            success.
          </p>
        </div>

        <p className="w-10/12 md:w-80 mx-auto lg:w-1/3 text-center lg:text-right rounded-b-3xl lg:rounded-tl-3xl p-10 px-7 lg:px-20 bg-pink-normal capitalize text-4xl lg:text-6xl">
          why choose kidpreneur bootcamp?
        </p>
      </div>

      <div className="w-full flex gap-10  flex-col-reverse lg:flex-row">
        <WaitlistForm />

        <div className="basis-80 flex flex-1 flex-col justify-center gap-10 p-spacing-normal lg:pr-spacing-normal">
          <h3 className="text-5xl lg:text-7xl capitalize relative">
            enroll your future leader today

            <img src={blueWaveTrippleIcon} alt="" className="absolute -top-20 lg:-top-14 h-16 lg:h-20 -left-10 lg:left-auto lg:-right-40 2xl:-right-60" />
          </h3>

          <p className="text-2xl">
            Don&#39;t wait to help your child dream big, learn practical skills, and
            start building a brighter future. Enroll now for one of our cohorts
            and take the first step in their entrepreneurial journey.
          </p>
        </div>
      </div>
    </section>
  );
};
