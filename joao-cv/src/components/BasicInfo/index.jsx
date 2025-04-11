import Image from "next/image";
import BoxArea from "../BoxArea";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const imgSize = 36

function age(birthdate) {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age;
}

const birthdate = new Date(1993, 4, 5); 
const currentAge = age(birthdate);


export default function BasicInfo() {
    const currentLanguage = useContext(LanguageContext)

    const title = currentLanguage === 'en' ? "basic info" : "informações básicas"
    
    return (
        <>
            <BoxArea title={title} sectionId="basic-info">
                <ul className="flex flex-col gap-3 justify-start">
                    <li className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-bold">
                            {currentLanguage === 'en' 
                            ? "Age" 
                            : "Idade"}:
                            </p>
                        <p>32</p>
                    </li>

                    <li className="flex items-center gap-3">
                        <Image
                            src='/svgComponents/phone.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="phone icon"
                        />
                        <p>
                            {currentLanguage === 'en' ? "(+55) " : ""}
                            (48) 9 9850-9958
                        </p>
                    </li>

                    <li className="flex flex-wrap items-center gap-3">
                        <Image
                            src='/svgComponents/linkedin.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="linkedin icon"
                        />
                        
                        <p className="break-all w-3/5 min-[400px]:w-4/5">
                            <a href="https://www.linkedin.com/in/joao-eduardo-gomes/" target="_blank">/joao-eduardo-gomes</a>
                        </p>
                        
                    </li>

                    <li className="flex flex-wrap items-center gap-3">
                        <Image
                            src='/svgComponents/location.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="location icon"
                        />
                        <p>
                            {currentLanguage === 'en' 
                            ? "Brasília, DF, Brazil" 
                            : "Brasília, DF, Brasil"}
                            <br />
                            (UTC-3)
                        </p>
                    </li>
                </ul>


            </BoxArea>
        </>
    )
}