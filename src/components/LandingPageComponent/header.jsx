import { logoIcon } from "../../constants/media";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center lg:justify-start py-4 px-spacing-small top-0 sticky z-50 bg-teal-normal">
      <img loading="lazy" src={logoIcon} alt="" className="h-14 object-contain" />
    </header>
  );
};
