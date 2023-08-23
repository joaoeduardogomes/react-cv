import Image from "next/image";
import BoxArea from "../BoxArea";
import languagesDB from '@/data/languages.json';

const imgSize = 90
const lvlImgWidth = imgSize - 10
const lvlImgHeight = 11

export default function Languages() {
    return (
        <>
            <BoxArea title="idiomas" sectionId="languages">
                <ul className="flex flex-wrap gap-3">
                    {languagesDB.map((language) => (
                        <li key={languagesDB.indexOf(language)}
                            className="flex flex-col items-center gap-3"
                        >
                            <p className="capitalize">{language.languageName}</p>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={language.flag}
                                alt={`${language.languageName} flag`}
                            />

                            <Image
                                width={lvlImgWidth}
                                height={lvlImgHeight}
                                src={`/svgComponents/lvl-${language.level}.svg`}
                                alt={`${language.languageName} understanding level`}
                            />

                            <p className="capitalize">{language.level}</p>
                        </li>
                    ))}
                </ul>
            </BoxArea>
        </>
    )
}