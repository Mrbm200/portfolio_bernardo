import { username } from "../../../data/user"
import { Buttons } from "../../Button";
import banner from "../../../assets/banner-img.png"
import style from "./style.module.css";

export const Intro = () => {
    const name = username;
    return(
        <section className={style.section}>
            <div className={style.div__section}>
            <span className={style.span0}>{name}</span>
            <h1 className={style.h1}>Bem vindo ao meu portfólio</h1>
            <p className={style.p}>Uma frase interessante sobre mim</p>
            <Buttons className={style.btn}>Saiba Mais</Buttons>
            </div>
            <img src={banner} alt="imagem ilustrativa1"></img>
        </section>
    )
}