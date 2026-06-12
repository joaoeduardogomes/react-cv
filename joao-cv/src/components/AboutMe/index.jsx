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
                    ? "My experience in the translation field sparked an interest in creative solutions and problem-solving in web development."
                    : "Minha experiência na área de tradução instigou um gosto por soluções criativas e resolução de problemas na área do desenvolvimento web."
                    }
                </p>
                <p>
                    {currentLanguage === 'en' 
                    ? "Now, as a full-stack web developer, I pride myself on a pragmatic approach to software engineering." 
                    : "Agora, como desenvolvedor web full-stack, tenho uma abordagem pragmática na engenharia de software."}
                    
                </p>
                <p>
                    {currentLanguage === 'en' 
                    ? "Rather than just learning random technologies, I focus on tools that make sense for my path and solve real problems." 
                    : "Ao invés de simplesmente aprender tecnologias aleatórias, busco aprender ferramentas que fazem sentido para a minha trajetória e que resolvem problemas reais."}
                    
                </p>
            </BoxArea>
        </>
    )
}