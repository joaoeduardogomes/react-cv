import { useContext } from "react";
import BoxArea from "../BoxArea";
import LanguageContext from "../../../contexts/LanguageContext";

export default function AboutMe() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage == 'en' ? 'about me' : 'apresentação'
    
    return (
        <>
            <BoxArea title={title} sectionId="about-me">
                <p>
                    {currentLanguage === 'en' 
                    ? "I am a junior web developer in a career transition." 
                    : "Sou um desenvolvedor web júnior em transição de carreira."}
                    
                </p>
                <p>
                    {currentLanguage === 'en' 
                    ? "My experience in the translation field sparked an interest in creative solutions and problem-solving in web development."
                    : "Minha experiência na área de tradução instigou um gosto por soluções criativas e resolução de problemas na área do desenvolvimento web."
                    }
                </p>
            </BoxArea>
        </>
    )
}