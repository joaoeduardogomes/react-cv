import BoxArea from "../BoxArea";
import '@/styles/lists.scss';

export default function Education() {
    return (
        <>
            <BoxArea title="formação" sectionId="education">
                <ul>
                    <li>
                        <span className="educationCourseItem flex flex-row gap-3 items-center">
                            <p className="flex-shrink-0 bg-myPurple p-1 rounded-md w-fit">
                                2014 - 2018
                            </p>
                            <p className="capitalize flex-shrink">
                                Universidade Federal do Rio Grande do Sul (UFRGS)
                            </p>
                        </span>
                        <p className="educationCourse">
                            Bacharelado em Letras
                        </p>
                    </li>
                </ul>
            </BoxArea>
        </>
    )
}