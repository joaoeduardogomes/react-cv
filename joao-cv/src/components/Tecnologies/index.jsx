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
                <div className='flex flex-wrap gap-5 justify-start xm:justify-start'>
                    {data["front-end"].map((tecnology) => (
                        <span key={data['front-end'].indexOf(tecnology)} className='flex flex-col items-center'>
                        <figure  className='flex flex-col items-center gap-2 w-32'>

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
                                src={`/svgComponents/lvl-${tecnology.level.en}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>
                        <p className="capitalize text-xs mt-2">{tecnology.level[currentLanguage]}</p>
                        </span>
                    ))}
                </div>

                {/* BACK-END TECH */}
                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Back-end</h2>
                <div className='flex flex-wrap gap-5 justify-start xm:justify-start'>
                    {data["back-end"].map((tecnology) => (
                        <span key={data['back-end'].indexOf(tecnology)} className='flex flex-col items-center'>
                        <figure  className='flex flex-col items-center gap-2 w-32'>

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
                                src={`/svgComponents/lvl-${tecnology.level.en}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>
                        <p className="capitalize text-xs mt-2">{tecnology.level[currentLanguage]}</p>
                        </span>
                    ))}
                </div>

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>
                    {currentLanguage == 'en'
                        ? "Other tools"
                        : "Outras ferramentas"}

                {/* OTHER TOOLS  */}
                </h2>
                <div className='flex flex-wrap gap-5 justify-start xm:justify-start'>
                    {data["others"].map((tecnology) => (
                        <span key={data['others'].indexOf(tecnology)} className='flex flex-col items-center'>
                        <figure  className='flex flex-col items-center gap-2 w-32'>

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
                                src={`/svgComponents/lvl-${tecnology.level.en}.svg`}
                                alt={`${tecnology.name} understanding level`}
                            />
                        </figure>
                        <p className="capitalize text-xs mt-2">{tecnology.level[currentLanguage]}</p>
                        </span>
                    ))}
                </div>

                {/* UNDERSTANDING LABELS */}
                {/* <aside className='flex flex-wrap gap-5 justify-center mx-auto mt-10 border-2 w-fit p-3'>
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
                </aside> */}
            </BoxArea>
        </>
    )
}