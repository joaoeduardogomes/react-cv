import { useContext } from "react";
import BoxArea from "../BoxArea";
import '@/styles/lists.scss';
import LanguageContext from "../../../contexts/LanguageContext";

export default function Experience() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "experience" : "experiências"

    return (
        <>
            <BoxArea title={title} sectionId="experience">
                <ul>
                    <li>
                        <p className="experiencePosition">
                            {currentLanguage === 'en'
                                ? "Volunteer Translator at"
                                : "Tradutor Voluntário em"} freeCodeCamp
                        </p>
                        <p className="experienceTime">03/2023 — {currentLanguage === 'en' ? "Present" : "Atualmente"}
                        </p>
                    </li>
                </ul>
            </BoxArea>
        </>
    )
}