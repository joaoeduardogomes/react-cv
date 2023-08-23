import BoxArea from "../BoxArea";
import styles from './styles.module.scss';

export default function Education() {
    return (
        <>
            <BoxArea title="formação" sectionId="education">
                <ul>
                    <li>
                        <span className={`${styles.courseItem} flex flex-row gap-3 items-center`}>
                            <p className="flex-shrink-0 bg-myPurple p-1 rounded-md w-fit">
                                2014 - 2018
                            </p>
                            <p className="capitalize flex-shrink">
                                Universidade Federal do Rio Grande do Sul (UFRGS)
                            </p>
                        </span>
                        <p className={styles.course}>
                            Bacharelado em Letras
                        </p>
                    </li>
                </ul>
            </BoxArea>
        </>
    )
}