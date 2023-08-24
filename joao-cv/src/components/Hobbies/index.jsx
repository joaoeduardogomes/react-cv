import Image from "next/image";
import BoxArea from "../BoxArea";

const imgSize = 70

export default function Hobbies() {
    return (
        <>
            <BoxArea title="passatempos" sectionId="hobbies">
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