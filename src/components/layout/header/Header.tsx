import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h3>Logo</h3>
          <nav className={scss.nav}>
            <Link href={"/"}>Главная</Link>
            <Link href={"/"}>О нас</Link>
            <Link href={"/"}>Курсы</Link>
            <Link href={"/"}>Контакты</Link>
          </nav>
          <nav className={scss.btns}>
            <Link href={"/"}>Войти</Link>
            <button>
              Присоединяйся <FaArrowRight />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
