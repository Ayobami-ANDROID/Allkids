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
    <section className="w-full flex relative flex-col-reverse py-10 gap-10 lg:gap-0 items-center justify-center lg:flex-row px-4 md:px-spacing-normal xl:px-spacing-large">
      <img 
        src={blueZigzagIcon} 
        alt="" 
        className="absolute bottom-10 -left-20 sm:-left-40 lg:left-0 h-12 sm:h-16 lg:h-28 z-0" 
      />
      
      <div className="w-full max-w-7xl mx-auto lg:flex">
        <div className="flex flex-col-reverse lg:flex-row w-full">
          {/* Text and Headings Section */}
          <div className="flex gap-6 flex-col items-center lg:items-end w-full order-1 lg:order-2 z-10 relative">
            <p className="text-lg sm:text-xl lg:text-3xl text-center lg:text-right">
              Welcome to Kidpreneur Bootcamp:
            </p>
            
            <h2 className="flex flex-col capitalize text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center lg:text-right">
              <p className="flex gap-2 flex-col relative lg:flex-row items-center lg:items-end justify-center lg:justify-end">
                <span className="text-xl sm:text-2xl lg:text-5xl mb-2">where</span>
                big ideas
                <img
                  src={redWaveIcon}
                  alt=""
                  className="absolute rotate-90 -bottom-10 sm:-bottom-16 right-0 sm:right-14 object-bottom w-12 sm:w-auto"
                />
              </p>
              
              <p className="flex gap-2 items-center justify-center lg:justify-end mt-2 lg:mt-0">
                <span className="text-xl sm:text-2xl lg:text-5xl">meet</span>
                <p className="flex flex-col items-center lg:items-end">
                  <span>young</span>
                  <span className="flex relative">
                    minds
                    <img
                      alt=""
                      src={yellowWaveIcon}
                      className="absolute -bottom-10 sm:-bottom-14 lg:-bottom-16 rotate-90 w-8 sm:w-2 lg:w-3 right-0 sm:right-12 lg:right-60 object-contain object-bottom"
                    />
                  </span>
                </p>
              </p>
            </h2>
            
            <button className="px-8 sm:px-10 py-2 sm:py-3 hidden lg:flex rounded-full bg-pink-normal text-center font-semibold text-lg sm:text-xl capitalize">
              enroll your child now
            </button>
          </div>

          {/* Image and Description Section */}
          <div className="lg:flex order-2 lg:order-1 w-full">
            <div className="w-full flex flex-col items-center lg:items-start gap-6 sm:gap-10">
              <div className="w-4/5 max-w-md aspect-square relative flex items-center justify-center">
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
              
              <p className="w-full lg:w-3/5 rounded-3xl p-4 sm:p-6 bg-white text-sm sm:text-base lg:text-xl lg:translate-x-[85%] lg:-translate-y-44 relative text-center lg:text-left">
                This isn't just another camp. It's a launchpad for your
                child's entrepreneurial journey. At Kidpreneur Bootcamp, we help
                kids explore their creativity, learn real-world skills, and build the
                confidence to lead.
              </p>
              
              <button className="px-8 sm:px-10 py-2 sm:py-3 lg:hidden rounded-full bg-pink-normal text-center font-semibold text-lg sm:text-xl capitalize">
                enroll your child now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};