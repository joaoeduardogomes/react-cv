import { useContext } from "react";
import BoxArea from "../BoxArea";
import '@/styles/lists.scss';
import LanguageContext from "../../../contexts/LanguageContext";

export default function SoftSkills() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "soft skills" : "habilidades pessoais"

    const softSkill = {
        en: ["flexibility and adaptability", "clear and objective communication", "teamwork", "overcome frustration", "persistence and resilience", "self-learning", "self-motivation"],
        pt: ["Flexibilidade e adaptabilidade", "comunicação clara e objetiva", "trabalho em equipe", "lidar com frustração", "persistência e resiliência", "autodidatismo", "automotivação"]
    }

    return (
        <>
            <BoxArea title={title} sectionId="soft-skills">

                <ul className="flex flex-col gap-5 text-lg">
                    {
                        softSkill[currentLanguage].map((skill) => (
                            <li 
                                key={softSkill[currentLanguage].indexOf(skill)}
                                className="softSkill capitalize"
                            >
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </BoxArea>
        </>
    )
}