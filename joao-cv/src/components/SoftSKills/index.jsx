import BoxArea from "../BoxArea";
import '@/styles/lists.scss';

export default function SoftSkills() {
    return (
        <>
            <BoxArea title="habilidades pessoais" sectionId="soft-skills">
                <ul className="flex flex-col gap-5 text-lg">
                    <li className="softSkill">Flexibilidade e daptabilidade</li>
                    <li className="softSkill">Comunicação clara e objetiva</li>
                    <li className="softSkill">Trabalho em equipe</li>
                    <li className="softSkill">Lidar com frustração</li>
                    <li className="softSkill">Persistência e resiliência</li>
                    <li className="softSkill">Autodidatismo</li>
                    <li className="softSkill">Automotivação</li>
                </ul>
            </BoxArea>
        </>
    )
}