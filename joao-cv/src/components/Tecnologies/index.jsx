import data from '@/data/tecnologies.json'
import BoxArea from '../BoxArea'
import Image from 'next/image'
import './tecnologies.scss';
import { useContext } from 'react';
import LanguageContext from '../../../contexts/LanguageContext';

const imgSize = 90
const lvlImgWidth = imgSize - 10
const lvlImgHeight = 11

export default function Tecnologies() {
    const currentLanguage = useContext(LanguageContext)

    return (
        <>
            <BoxArea title="front-end" sectionId="tecnologies">
                {/* FRONT-END TECH */}
                <span className='flex flex-wrap gap-5 justify-center xm:justify-start'>
                    {data["front-end"].map((tecnology) => (
                        <figure key={data['front-end'].indexOf(tecnology)} className='flex flex-col items-center gap-2 w-36'>

                            {/* Tecnology name */}
                            <figcaption className='tecnologyName text-xs'>{tecnology.name.toUpperCase()}</figcaption>

                            {/* Tecnology image */}
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />

                            {/* Tecnology understanding level image */}
                            <Image
                                width={lvlImgWidth}
                                height={lvlImgHeight}
                                src={`/svgComponents/lvl-${tecnology.level}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>

                    ))}
                </span>

                {/* BACK-END TECH */}
                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Back-end</h2>
                <span className='flex flex-wrap gap-5 justify-center xm:justify-start'>
                    {data["back-end"].map((tecnology) => (
                        <figure key={data['back-end'].indexOf(tecnology)} className='flex flex-col items-center gap-2 w-36'>
                            <figcaption className='tecnologyName'>{tecnology.name.toUpperCase()}</figcaption>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />

                            <Image
                                width={lvlImgWidth}
                                height={lvlImgHeight}
                                src={`/svgComponents/lvl-${tecnology.level}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>
                    ))}
                </span>

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>
                    {currentLanguage == 'en'
                        ? "Other tools"
                        : "Outras ferramentas"}

                {/* OTHER TOOLS  */}
                </h2>
                <span className='flex flex-wrap gap-5 justify-center xm:justify-start'>
                    {data["others"].map((tecnology) => (
                        <figure key={data['others'].indexOf(tecnology)} className='flex flex-col items-center gap-2 w-36'>
                            <figcaption className='tecnologyName'>{tecnology.name.toUpperCase()}</figcaption>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />

                            <Image
                                width={lvlImgWidth}
                                height={lvlImgHeight}
                                src={`/svgComponents/lvl-${tecnology.level}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>
                    ))}
                </span>

                {/* UNDERSTANDING LABELS */}
                <aside className='flex flex-wrap gap-5 justify-center mx-auto mt-10 border-2 w-fit p-3'>
                    <figure className='flex flex-col items-center gap-2'>
                        <Image
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-basic.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>
                            {currentLanguage == 'en'
                                ? "Basic"
                                : "Básico"}
                        </figcaption>
                    </figure>

                    <figure className='flex flex-col items-center gap-2'>
                        <Image
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-intermediate.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>
                            {currentLanguage == 'en'
                                ? "Intermediate"
                                : "Intermediário"}
                        </figcaption>
                    </figure>

                    <figure className='flex flex-col items-center gap-2'>
                        <Image
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-advanced.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>
                            {currentLanguage == 'en'
                                ? "Advanced"
                                : "Avançado"}
                        </figcaption>
                    </figure>
                </aside>
            </BoxArea>
        </>
    )
}