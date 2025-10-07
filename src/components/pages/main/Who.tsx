import { FC } from "react";
import scss from "./Who.module.scss";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const Who: FC = () => {
  return (
    <section className={scss.Who}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.left}>
            <h2>Почему (название кур.)</h2>
            <p>
              Мы предоставляем множество функций, которые вы можете
              использовать. Постепенное накопление информация
            </p>
            <div className={scss.stat}>
              <h3>100+</h3>
              <p>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </p>
            </div>
            <div className={scss.stat}>
              <h3>80+</h3>
              <p>
                Мы предоставляем множество функций, которые вы можете
                использовать. Постепенное накопление информация
              </p>
            </div>
          </div>
          <div className={scss.right}>
            <div className={scss.feature}>
              <FaUserGraduate className={scss.icon} />
              <div>
                <h4>Личное обучение</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className={scss.feature}>
              <FaChalkboardTeacher className={scss.icon} />
              <div>
                <h4>Интерактивные уроки</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
            <div className={scss.feature}>
              <MdSupportAgent className={scss.icon} />
              <div>
                <h4>24/7 Поддержка учеников</h4>
                <p>
                  Постепенное накопление информация об атомном и мелкомасштабное
                  поведение...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
