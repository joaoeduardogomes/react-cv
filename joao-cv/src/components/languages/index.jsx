import Image from "next/image";
import BoxArea from "../BoxArea";
import languagesDB from '@/data/languages.json';
import styles from './styles.module.scss';
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const imgSize = 80
const lvlImgWidth = imgSize - 10
const lvlImgHeight = 11

export default function Languages() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "languages" : "idiomas"
    
    return (
        <>
            <BoxArea title={title} sectionId="languages">
                <ul className="flex flex-wrap gap-9 justify-evenly">
                    {languagesDB.map((language) => (
                        <li key={languagesDB.indexOf(language)}
                            className={`${styles.languageItem} flex flex-col items-center gap-3`}
                        >
                            <p className="capitalize">{language.languageName[currentLanguage]}</p>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={language.flag}
                                alt={`${language.languageName[currentLanguage]} flag`}
                            />

                            <Image
                                width={lvlImgWidth}
                                height={lvlImgHeight}
                                src={`/svgComponents/lvl-${language.level.en}.svg`}
                                alt={`${language.languageName[currentLanguage]} understanding level`}
                            />

                            <p className="capitalize text-xs">{language.level[currentLanguage]}</p>
                        </li>
                    ))}
                </ul>
            </BoxArea>
        </>
    )
}