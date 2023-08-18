import data from '@/data/tecnologies.json'
import BoxArea from '../BoxArea'
import Image from 'next/image'
import './tecnologies.scss';

const imgSize = 90

export default function Tecnologies() {
    return (
        <>
            <BoxArea title="front-end" sectionId="tecnologies">
                <span className='flex flex-wrap gap-5'>
                    {data["front-end"].map((tecnology) => (
                        <figure key={tecnology.index} className='flex flex-col items-center gap-2'>
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />
                        </figure>
                    ))}
                </span>

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Back-end</h2>
                <span className='flex flex-wrap gap-5'>
                    {data["back-end"].map((tecnology) => (
                        <figure key={tecnology.index} className='flex flex-col items-center gap-2'>
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />
                        </figure>
                    ))}
                </span>

                <h2 className='relative uppercase font-extrabold bg-myPurple w-fit mt-3 py-2 px-6 -mb-3 -ml-8 rounded-md'>Back-end</h2>
                <span className='flex flex-wrap gap-5'>
                    {data["others"].map((tecnology) => (
                        <figure key={tecnology.index} className='flex flex-col items-center gap-2'>
                            <figcaption className='font-bold'>{tecnology.name.toUpperCase()}</figcaption>
                            <Image
                                width={imgSize}
                                height={imgSize}
                                src={tecnology.src}
                                alt={tecnology.name}
                                id={`${tecnology.name.toLowerCase().split(' ').join('-')}-img`}
                                className='rounded-full'
                            />
                        </figure>
                    ))}
                </span>
            </BoxArea>
        </>
    )
}