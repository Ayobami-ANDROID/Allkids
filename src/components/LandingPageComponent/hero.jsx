import {
    blueZigzagIcon,
  boardImg,
  circleIcon,
  kidHeroIndexImg,
  redWaveIcon,
  yellowWaveIcon,
} from "../../constants/media";
import { Header } from "./header";

export const Hero = () => {
  return (
    <section className="w-full  relative  py-10 gap-10 lg:gap-0  lg:pb-48">
   <Header />
    
    <div className="lg:flex flex-col-reverse lg:flex-row  items-center justify-center w-full relative px-spacing-normal xl:px-spacing-large mb-8">
      {/* Second div (text and headings) moved to top on small screens */}
      <div className="flex gap-6 flex-col lg:items-end  w-full order-1 lg:order-2 text ">
        <p className="text-xl lg:text-3xl w-full lg:text-left text-center">Welcome to Kidpreneur Bootcamp:</p>
        
        <h2 className="flex flex-col capitalize text-7xl lg:text-8xl mxl:text-9xl  w-full">
          <p className="flex gap-2 flex-col relative lg:flex-row items-center lg:items-end   ">
            <span className="text-2xl lg:text-4xl xl:text-5xl mxl:text-6xl mb-2">where</span>
            big ideas
            <img
              src={redWaveIcon}
              alt=""
              className="absolute rotate-90 -bottom-16 lg:right-14 sm:right-80  right-14  object-bottom mxl:right-52"
            />
          </p>
          
          <p className="flex gap-2  sm:justify-center lg:justify-start w-full lg:ml-32 ml-12  ">
            <span className="text-2xl lg:text-5xl mxl:text-6xl mt-2 ">meet</span>
            <p className="flex flex-col items-end ">
              <span className="w-full">young</span>
              <span className="flex relative ">
                minds
                <img
                  alt=""
                  src={yellowWaveIcon}
                  className="absolute -bottom-14 lg:-bottom-16 rotate-90 w-2 lg:w-3 right-12 lg:right-60 mxl:right-64 object-contain object-bottom"
                />
              </span>
            </p>
          </p>
        </h2>
        <div className="w-full flex justify-center">
        <button className="px-10 py-3 hidden lg:flex rounded-full bg-pink-normal text-center font-semibold text-xl capitalize">
          enroll your child now
        </button>
        </div>
        
        
      </div>

      {/* First div (board and description) */}
      <div className="lg:flex order-2 lg:order-1 lg:mb-8 mt-4 w-full relative">
        <div className="w-full flex flex-col items-center lg:items-start gap-10">
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
          
          <p className="lg:absolute bg-[#fff] rounded-3xl p-6 lg:w-3/5 top-[70%] left-[50%]">
            This isn&#39;t just another camp. It&#39;s a launchpad for your
            child&#39;s entrepreneurial journey. At Kidpreneur Bootcamp, we help
            kids explore their creativity, learn real-world skills, and build the
            confidence to lead.
          </p>

         
          
          <button className="px-10 py-3 lg:hidden rounded-full bg-pink-normal text-center font-semibold text-xl capitalize">
            enroll your child now
          </button>
        </div>
      </div>
    </div>


    <div className="">
      
    <img 
      src={blueZigzagIcon} 
      alt="" 
      className="  absolute bottom-56 lg:bottom-32 -left-[42%] lg:left-0 h-16 lg:h-28" 
    />
    </div>

  </section>
  );
};
