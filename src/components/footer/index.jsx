import { user } from "../../data/user"
import linked from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"
import whats from "../../assets/whatsapp-icon.png"
import style from "./style.module.css"

export const Footer = () => {
    const name = user;
    return(
        <section className={style.section__final}>
        <h1 className={style.h11}>Contato</h1>
        <span className={style.span11}>Todos os direitos reservados - {name}</span>
        <img src={whats} alt="" />
        <img src={linked} alt="" />
        <img src={github} alt="" />
        </section>
    )
}