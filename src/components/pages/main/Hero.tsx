import { FC } from "react";
import scss from "./Hero.module.scss";
import heroImg from "@/assets/images/heroImg.png";
import heroIcon1 from "@/assets/images/heroIcon1.svg";
import heroIcon2 from "@/assets/images/heroIcon2.svg";
import heroIcon3 from "@/assets/images/heroIcon3.svg";

const Hero: FC = () => {
  return (
    <section className={scss.Hero}>
      <div className="container">
        <div className={scss.content1}>
          <div className={scss.text}>
            <h1>
              Надо много учиться, <br /> чтобы знать хоть немного.
            </h1>
            <p>
              Обеспечьте сеть для всех ваших потребностей легко и весело, <br />
              используя наши курсы.Откройте для себя интересные функции от нас.
            </p>
            <button>Начать</button>
          </div>
          <div className={scss.img}>
            <img src={heroImg.src} alt="img" />
          </div>
        </div>
        <div className={scss.content2}>
          <div className={scss.card}>
            <img src={heroIcon1.src} alt="img" />
            <h5>Пожизненный доступ</h5>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
          <div className={scss.card}>
            <img src={heroIcon2.src} alt="img" />
            <h5>Пожизненный доступ</h5>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
          <div className={scss.card}>
            <img src={heroIcon3.src} alt="img" />
            <h5>Пожизненный доступ</h5>
            <div className={scss.line}></div>
            <p>
              Постепенное накопление <br />
              информация об атомном и <br />
              мелкомасштабное поведение...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
