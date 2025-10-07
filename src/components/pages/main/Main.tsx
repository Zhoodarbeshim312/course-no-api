import { FC } from "react";
import scss from "./Main.module.scss";

const Main: FC = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>Main</div>
      </div>
    </section>
  );
};

export default Main;
