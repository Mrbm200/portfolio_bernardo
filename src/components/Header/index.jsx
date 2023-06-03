import { Buttons } from "../Button";

import style from "./style.module.css";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.ancor__init}>
        <span href="">Portfolio</span>
      </div>
      <div className={style.ancor__mid}>
        <a href="">Sobre</a>
        <a href="">Slack</a>
        <a href="">Projects</a>
      </div>
      <Buttons type={"submit"}>Contato</Buttons>
    </div>
  );
};
