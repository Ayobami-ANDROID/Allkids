import { socials } from "../../constants/config";
import { logoIcon } from "../../constants/media";
import { BsArrowRight } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-white p-spacing-small">
      <div className="flex w-full flex-col gap-10 py-4 border-t-8 border-black">
        <img
          alt=""
          loading="lazy"
          src={logoIcon}
          className="h-16 hidden lg:flex lg:self-start object-contain"
        />

        <div className="w-full flex text-3xl lg:text-5xl lg:font-bold capitalize flex-col lg:flex-row gap-20 lg:gap-0 items-start lg:items-center justify-between">
          <p className="">questions?</p>
          <p className="flex items-center gap-4 w-full justify-between pr-4 lg:pr-0 lg:w-auto">
            get in touch
            <BsArrowRight className="text-green-normal origin-right scale-x-150 lg:scale-x-100" />
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 py-4 lg:border-t-2 border-black">
        <div className="w-full flex font-bold capitalize flex-col lg:flex-row gap-10 items-center lg:justify-end">
          <img
            alt=""
            loading="lazy"
            src={logoIcon}
            className="h-16 lg:hidden object-contain"
          />

          <span className="pr-2 first-letter:capitalize">
            website designed by Waaki creative
          </span>
        </div>

        <div className="nav hidden lg:flex items-center justfiy-start gap-8">
          {socials.map(item => (
            <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" className="text-green-normal">
              <item.icon size={25} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
