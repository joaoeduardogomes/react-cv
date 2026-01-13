import { useContext } from "react";
import BoxArea from "../BoxArea";
import '@/styles/lists.scss';
import LanguageContext from "../../../contexts/LanguageContext";

export default function SoftSkills() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "soft skills" : "habilidades pessoais"

    const softSkills = {
    en: [
        "Clear and objective communication",
        "Problem solving",
        "Adaptability",
        "Attention to detail",
        "Teamwork",
        "Self-directed learning",
        "Resilience"
    ],
    pt: [
        "Comunicação clara e objetiva",
        "Resolução de problemas",
        "Adaptabilidade",
        "Atenção aos detalhes",
        "Trabalho em equipe",
        "Aprendizado autodirigido",
        "Resiliência"
    ]
}


    return (
        <>
            <BoxArea title={title} sectionId="soft-skills">

                <ul className="flex flex-col gap-5 text-lg">
                    {
                        softSkills[currentLanguage].map((skill) => (
                            <li 
                                key={softSkills[currentLanguage].indexOf(skill)}
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