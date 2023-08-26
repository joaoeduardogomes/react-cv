'use client';

import Image from "next/image";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";


export default function Header() {   
    const currentLanguage = useContext(LanguageContext)
    
    const print = () => window.print();

    const mailTo = () => {
        window.open('mailto:joaoeduardo.gomes21@gmail.com?subject=CV related contact');
    }

    return (
        <>
            <header className='bg-myBlack w-full h-fit px-12 mb-10 lg:gap-6 text-myWhite flex-col gap-16 py-3 lg:flex lg:py-6'>
                <Image 
                    src='/Avatar.png'
                    width={200}
                    height={200}
                    alt="Profile image"
                    className="lg:absolute lg:mt-6 m-auto mb-4 border-4 border-white"
                />
                <div className="min-auto w-fit m-auto text-center">
                    <h1 className="text-2xl font-bold">João Eduardo <br /> M. Gomes</h1>
                    <p id="position" className="text-lg my-5">
                        {currentLanguage == 'en' ? 'Web developer' : 'Desenvolvedor web'}
                        
                    </p>

                    <span className="flex flex-col md:flex-row items-center justify-center align-middle gap-5 lg:gap-10">
                        <button className="rounded-full bg-myGreen p-3  border-4 border-myGreen transition duration-300 hover:bg-transparent" onClick={print}>
                            Download CV
                        </button>
                        <button className="rounded-full bg-myPurple p-3 border-4 border-myPurple transition duration-300 hover:bg-transparent" onClick={mailTo}>
                            {currentLanguage == 'en' ? 'Contact Me' : 'Entrar em contato'}
                        </button>
                    </span>
                </div>
            </header>
        </>
    )
}