import data from '@/data/tecnologies.json'
import BoxArea from '../BoxArea'
import Image from 'next/image'
import './tecnologies.scss';

const imgSize = 90
const lvlImgWidth = imgSize - 10
const lvlImgHeight = 12

export default function Tecnologies() {
    return (
        <>
            <BoxArea title="front-end" sectionId="tecnologies">
                <span className='flex flex-wrap gap-5'>
                    {data["front-end"].map((tecnology) => (
                        <figure key={data['front-end'].indexOf(tecnology)} className='flex flex-col items-center gap-2'>

                            {/* Tecnology name */}
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>

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

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Back-end</h2>
                <span className='flex flex-wrap gap-5'>
                    {data["back-end"].map((tecnology) => (
                        <figure key={data['back-end'].indexOf(tecnology)} className='flex flex-col items-center gap-2'>
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>
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

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Outras ferramentas</h2>
                <span className='flex flex-wrap gap-5'>
                    {data["others"].map((tecnology) => (
                        <figure key={data['others'].indexOf(tecnology)} className='flex flex-col items-center gap-2'>
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>
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

                <aside className='flex flex-wrap gap-5 justify-center mx-auto mt-10 -mb-6 md:-mb-14 print:-mb-12 border-2 border-b-0 w-fit p-3'>
                    <figure className='flex flex-col items-center'>
                        <Image 
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-basic.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>Básico</figcaption>
                    </figure>

                    <figure className='flex flex-col items-center'>
                        <Image 
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-intermediate.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>Intermediário</figcaption>
                    </figure>

                    <figure className='flex flex-col items-center'>
                        <Image 
                            width={lvlImgWidth}
                            height={lvlImgHeight}
                            src='/svgComponents/lvl-advanced.svg'
                            alt="Basic level understanding img"
                        />
                        <figcaption>Avançado</figcaption>
                    </figure>
                </aside>
            </BoxArea>
        </>
    )
}