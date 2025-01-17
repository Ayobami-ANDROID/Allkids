import { IoClose } from "react-icons/io5";
import { IoMdPlay } from "react-icons/io";
import { useEffect, useState } from "react";
import { expectationsBody, expectationsHeader } from "../../constants/config";

export const Expect = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % expectationsHeader.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full flex flex-col gap-10 bg-white py-10">
      <header className="w-full flex flex-col lg:flex-row gap-10 px-spacing-normal">
        <h2 className="basis-1/2 text-5xl lg:text-7xl text-center capitalize flex flex-col gap-2 items-center">
          imagine this
          <span className="w-1 lg:w-full h-20 lg:h-1 bg-black flex relative items-end lg:items-center justify-center before:w-2 before:h-2 before:absolute before:bg-white before:border-4 before:border-black before:p-1 before:lg:p-2 before:rounded-full before:lg:right-0" />
        </h2>

        <>
          <div className="hidden lg:flex flex-col gap-10 items-center basis-1/2 pl-20">
            <div className="flex  items-center lg:overflow-hidden">
              {expectationsHeader.map((item) => (
                <p
                  key={item.content}
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  className="flex-none w-full text-3xl transition-transform duration-500 ease-in-out"
                >
                  {item.content}
                </p>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {expectationsHeader.map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="expect"
                  checked={currentSlide === index}
                  onChange={() => handleSlideChange(index)}
                  className="cursor-pointer appearance-none border-2 lg:w-6 lg:h-6 rounded-full bg-white  before:block before:w-4 before:h-4 before:rounded-full checked:bg-green-500"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10 items-start lg:hidden">
            {expectationsHeader.map((item) => (
              <p
                key={item.content}
                className="flex-none w-4/5 text-lg border-b last:border-none"
              >
                {item.content}
              </p>
            ))}
          </div>
        </>
      </header>

      <div className="w-full flex flex-col lg:flex-row gap-10 lg:px-spacing-normal">
        <div className="basis-1/2 flex flex-col items-center gap-10">
          <h3 className="mx-auto lg:hidden text-center rounded-3xl rounded-bl-none p-14 py-4 lg:px-20 bg-pink-normal capitalize text-4xl lg:text-6xl">
            What to Expect
          </h3>

          <div className="w-4/5 p-10 lg:-mt-24 rounded-2xl bg-yellow-normal aspect-video">
            <div className="w-full h-full flex  bg-white">
              {/* <IoMdPlay className="text-red-normal w-10 lg:w-20 h-10 lg:h-20" /> */}
              <iframe 
              src="https://www.youtube.com/embed/EQ-6c1fm27A"
              className="w-full"
              
              >
              </iframe>
            </div>
          </div>

          <p className="text-2xl lg:text-4xl w-4/5 lg:pl-10">
          Our bootcamp focuses on inspiring creativity and 
          turn ideas into action.
          </p>
        </div>

        <div className="basis-1/2 flex flex-col items-center">
          <h3 className="mx-auto lg:mr-0 hidden lg:flex text-right rounded-b-3xl md:rounded-br-none lg:rounded-tl-3xl p-10 px-7 lg:px-20 bg-pink-normal capitalize text-4xl lg:text-6xl">
            What to Expect
          </h3>

          <div className="w-4/5 pt-10 flex flex-col gap-4">
            {expectationsBody.map((item) => (
              <p key={item.content} className="flex gap-2 items-start text-xl">
                <IoClose
                  size={26}
                  className="text-green-normal mt-1 hidden lg:flex"
                />
                {item.content}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
