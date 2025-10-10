import { FC } from "react";
import scss from "./Available.module.scss";

const Available: FC = () => {
  return (
    <section className={scss.Available}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  );
};

export default Available;
