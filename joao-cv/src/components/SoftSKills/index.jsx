import BoxArea from "../BoxArea";
import styles from './styles.module.scss';

export default function SoftSkills() {
    return (
        <>
            <BoxArea title="habilidades pessoais" sectionId="soft-skills">
                <ul className="flex flex-col gap-5 text-lg">
                    <li className={styles.skill}>Flexibilidade e daptabilidade</li>
                    <li className={styles.skill}>Comunicação clara e objetiva</li>
                    <li className={styles.skill}>Trabalho em equipe</li>
                    <li className={styles.skill}>Lidar com frustração</li>
                    <li className={styles.skill}>Persistência e resiliência</li>
                    <li className={styles.skill}>Autodidatismo</li>
                    <li className={styles.skill}>Automotivação</li>
                </ul>
            </BoxArea>
        </>
    )
}