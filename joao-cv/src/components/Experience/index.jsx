import BoxArea from "../BoxArea";
import '@/styles/lists.scss';

export default function Experience() {
    return (
        <>
            <BoxArea title="experiências" sectionId="experience">
                <ul>
                    <li>
                        <p className="experiencePosition">Tradutor Voluntário em freeCodeCamp</p>
                        <p className="experienceTime">03/2023 — Atualmente</p>
                    </li>
                </ul>
            </BoxArea>
        </>
    )
}