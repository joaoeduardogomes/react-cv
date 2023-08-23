import BoxArea from "../BoxArea";
import data from '@/data/courses.json';
import styles from './styles.module.scss';

export default function Courses() {
    return (
        <>
            <BoxArea title="cursos" sectionId="courses">
                <ul className="flex flex-col gap-5">
                    {data.map((course) => (
                        <li key={data.indexOf(course)} >
                            <p className={styles.courseName}>
                                {course.name}
                            </p>
                            <p className={styles.courseTime}>
                                Carga horária: {course.time} (
                                <a href={course.certificateLink} target="_blank" className="underline decoration-solid hover:text-myGreen hover:no-underline hover:font-bold duration-300 ease-in-out">
                                    ver certificado
                                </a>
                                )
                            </p>
                        </li>
                    ))}
                </ul>

            </BoxArea>
        </>
    )
}