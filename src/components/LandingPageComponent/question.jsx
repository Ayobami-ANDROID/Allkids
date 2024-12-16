import { questions } from "../../constants/config";
import { useMemo, useState, useEffect } from "react";

export const Question = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const groupedQuestions = useMemo(() => {
    return Array.from({ length: Math.ceil(questions.length / 5) }, (_, i) =>
      questions.slice(i * 5, (i + 1) * 5)
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupedQuestions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [groupedQuestions.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full lg:px-spacing-small flex flex-col items-center lg:items-start">
      <div className="w-10/12 md:w-80 lg:w-1/3 rounded-3xl p-10 px-14 lg:px-14 bg-pink-normal capitalize font-semibold text-2xl lg:text-4xl  -my-20 lg:mt-0 z-10">
      <p>
        get ready to 
      </p>
      <p>
      watch them shine
      </p>
      </div>
     

      <div className="w-full p-spacing-normal pt-40 flex flex-col lg:rounded-3xl bg-yellow-normal">
        <p className="text-3xl mb-40">
          Kidpreneur Bootcamp: equipping young minds to explore, create, and
          grow into the leaders of tomorrow.
        </p>

        <h3 className="font-semibold lg:text-5xl text-center">F.A.Qs</h3>
        <div className="w-full flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {groupedQuestions.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-none w-full flex-col gap-4 list-inside list-decimal lg:text-2xl"
              >
                {group.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="">
                      {(groupIndex + 1) * (index + 1)} Q: {item.quesiton}
                    </p>
                    <p className="">A: {item.answer}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {groupedQuestions.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="question"
              checked={currentSlide === index}
              onChange={() => handleSlideChange(index)}
              className="cursor-pointer appearance-none lg:w-6 lg:h-6 rounded-full bg-white  before:block before:w-4 before:h-4 before:rounded-full checked:bg-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
