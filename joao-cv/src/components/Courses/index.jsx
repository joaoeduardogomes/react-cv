import BoxArea from "../BoxArea";
import data from '@/data/courses.json';
import '@/styles/lists.scss';
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

export default function Courses() {
    const currentLanguage = useContext(LanguageContext)
    
    return (
        <>
            <BoxArea title="cursos" sectionId="courses">
                <ul className="flex flex-col gap-5">
                    {data.map((course) => (
                        <li key={data.indexOf(course)} >
                            <p className='courseName'>
                                {course.name[currentLanguage]}
                            </p>
                            <p className='courseTime'>
                                {currentLanguage === 'en' 
                                ? 'Hours' 
                                : 'Carga horária'}: {course.time} (
                                <a href={course.certificateLink} target="_blank" className="underline decoration-solid hover:text-myGreen hover:no-underline hover:font-bold duration-300 ease-in-out">
                                    {currentLanguage === 'en' 
                                    ? "view certificate"
                                    : "ver certificado"}
                                </a>
                                )
                            </p>
                        </li>
                    ))}
                </ul>

            </BoxArea>
        </>
    )
}