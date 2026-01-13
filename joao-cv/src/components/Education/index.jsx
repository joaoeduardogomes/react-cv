import { useContext } from "react";
import BoxArea from "../BoxArea";
import '@/styles/lists.scss';
import LanguageContext from "../../../contexts/LanguageContext";
import data from '@/data/education.json';

export default function Education() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "education" : "formação"

    return (
        <>
            <BoxArea title={title} sectionId="education">
                <ul className="flex flex-col gap-5">
                    {data.map((graduation) => (
                        <li key={`graduation-${data.indexOf(graduation)}`}>
                            <span className="educationCourseItem flex flex-col min-[420px]:flex-row gap-3 items-center">
                                <p className="flex-shrink-0 bg-myPurple p-1 rounded-md w-fit max-w-sm text-sm">
                                    {graduation.date.start} – {graduation.date.end}
                                </p>
                                <p className="flex-shrink w-full">
                                    {graduation.institution[currentLanguage]}
                                </p>
                            </span>
                            <p className="educationCourse ml-[6.5rem] font-bold">
                                {graduation.course[currentLanguage]}

                            </p>
                        </li>
                    ))}

                </ul>
            </BoxArea>
        </>
    )
}