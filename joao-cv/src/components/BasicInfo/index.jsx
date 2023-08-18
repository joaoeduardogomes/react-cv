import Image from "next/image";
import BoxArea from "../BoxArea";

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
    return (
        <>
            <BoxArea title="informações básicas" sectionId="basic-info">
                <ul className="flex flex-col gap-3 justify-start">
                    <li className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-bold">Idade:</p>
                        <p>{currentAge}</p>
                    </li>

                    <li className="flex items-center gap-3">
                        <Image
                            src='/svgComponents/phone.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="phone icon"
                        />
                        <p>(48) 9 9850-9958</p>
                    </li>

                    <li className="flex flex-wrap items-center gap-3">
                        <Image
                            src='/svgComponents/email.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="email icon"
                        />
                        <p className="text-sm">joaoeduardo.gomes21@gmail.com</p>
                    </li>

                    <li className="flex flex-wrap items-center gap-3">
                        <Image
                            src='/svgComponents/location.svg'
                            width={imgSize}
                            height={imgSize}
                            alt="location icon"
                        />
                        <p>Tubarão, SC, Brasil
                            <br />
                            (UTC-3)
                        </p>
                    </li>
                </ul>


            </BoxArea>
        </>
    )
}