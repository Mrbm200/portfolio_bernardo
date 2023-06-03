import { Cardproject } from "../../CardProject"
import { projects } from "../../../data/projects"
import style from "./style.module.css";

export const Projetos = () => {
    const [p1, p2, p3, p4] = projects;
    return(
        
        <section>
            <h3>Projeto</h3>
            <ul className={style.list1}>
                <Cardproject {...p1}/>
                <Cardproject {...p2}/>
                <Cardproject {...p3}/>
                <Cardproject {...p4}/>
            </ul>
        </section>
    )
}
