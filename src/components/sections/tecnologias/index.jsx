import { technologies } from "../../../data/technologies"
import { Cardtec } from "../../CardTec";
import style from "./style.module.css";

export const Techs = () => {
    const [tec1, tec2, tec3, tec4] = technologies;
    return(
        <section>
        <h3>Tecnologias</h3>
        <ul className={style.list}>
            <Cardtec {...tec1}/>
            <Cardtec {...tec2}/>
            <Cardtec {...tec3}/>
            <Cardtec {...tec4}/>
        </ul>
        </section>
    )
}