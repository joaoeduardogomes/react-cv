import { useContext } from "react";
import BoxArea from "../BoxArea";
import '@/styles/lists.scss';
import LanguageContext from "../../../contexts/LanguageContext";

export default function Education() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "education" : "formação"

    return (
        <>
            <BoxArea title={title} sectionId="education">
                <ul>
                    <li>
                        <span className="educationCourseItem flex flex-row gap-3 items-center">
                            <p className="flex-shrink-0 bg-myPurple p-1 rounded-md w-fit">
                                2014 - 2018
                            </p>
                            <p className="capitalize flex-shrink">
                                {currentLanguage === 'en'
                                    ? "Federal University of Rio Grande do Sul"
                                    : "Universidade Federal do Rio Grande do Sul"} (UFRGS)
                            </p>
                        </span>
                        <p className="educationCourse">
                            {currentLanguage === 'en'
                                ? "Bachelor's Degree in Letters"
                                : "Bacharelado em Letras"}

                        </p>
                    </li>
                </ul>
            </BoxArea>
        </>
    )
}