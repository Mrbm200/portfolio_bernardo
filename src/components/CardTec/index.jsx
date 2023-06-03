import style from "../sections/tecnologias/style.module.css";

export const Cardtec = ({name, img}) => {
    return(
            <li className={style.litem1}>
                <img className={style.img1} src={img} alt={`${name}`} />
                <span className={style.span2}>{name}</span>
            </li>
    )
}