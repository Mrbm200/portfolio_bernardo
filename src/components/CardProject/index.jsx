import git from "../../assets/git-icon.png";
import style from "../sections/projetos/style.module.css";

export const Cardproject = ({name, description}) => {
    return(
        <li className={style.listi2}>
            <div className={style.nd}>
            <h4 className={style.name3}>{name}</h4>
            <img src={git} alt="" />
            </div>
            <p className={style.para1}>{description}</p>
            <a className={style.ancor1}>Saiba mais</a>
        </li>
    )
}