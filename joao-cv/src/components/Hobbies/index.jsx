import Image from "next/image";
import BoxArea from "../BoxArea";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const imgSize = 70

export default function Hobbies() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "hobbies" : "passatempos"
    
    return (
        <>
            <BoxArea title={title} sectionId="hobbies">
                <span className="flex flex-wrap md:flex-nowrap md:gap-4 items-center md:justify-center h-full">
                    <Image
                        width={imgSize}
                        height={imgSize}
                        src="/svgComponents/gamepad.svg"
                        alt="gamepad icon"
                    />
                    <Image
                        width={imgSize}
                        height={imgSize}
                        src="/svgComponents/book.svg"
                        alt="book icon"
                    />
                    <Image
                        width={imgSize}
                        height={imgSize}
                        src="/svgComponents/film.svg"
                        alt="film icon"
                    />
                    <Image
                        width={imgSize}
                        height={imgSize}
                        src="/svgComponents/coffee.svg"
                        alt="coffee icon"
                    />
                </span>
            </BoxArea>
        </>
    )
}