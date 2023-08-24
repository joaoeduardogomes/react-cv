import Image from "next/image";
import BoxArea from "../BoxArea";
import languagesDB from '@/data/languages.json';
import styles from './styles.module.scss';

const imgSize = 80
const lvlImgWidth = imgSize - 10
const lvlImgHeight = 11

export default function Languages() {
    return (
        <>
            <BoxArea title="idiomas" sectionId="languages">
                <ul className="flex flex-wrap gap-3 justify-evenly">
                    {languagesDB.map((language) => (
                        <li key={languagesDB.indexOf(language)}
                            className={`${styles.languageItem} flex flex-col items-center gap-3`}
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