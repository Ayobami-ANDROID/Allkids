import { logoIcon } from "../../constants/media"
import { redWaveIcon } from "../../constants/media"

const SucessHeader = () => {
    return (
        <header className="w-full flex items-center justify-between    top-0   bg-teal-normal ">
            <div className="flex flex-col items-center justify-center lg:mx-8 mx-2">
                <img loading="lazy" src={logoIcon} alt="" className="h-14 object-contain" />
            </div>
            <div className=" text-center relative rounded-tl-3xl w-full bg-pink-normal flex p-8 capitalize items-center justify-center text-2xl lg:text-6xl">
                Thank You for Signing UP!
                <img src={redWaveIcon}  className="absolute lg:static hidden -bottom-14 lg:-bottom-8 rotate-90 w-2 lg:w-3 left-[28.5rem] mxl:left-[44rem] object-contain object-bottom"></img>
            </div>
        </header>
    )
}

export default SucessHeader