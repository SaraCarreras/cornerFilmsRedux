import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { ButtonLogin } from "../../button/button.login";

const Header = () => {
    const logo = "./dotpop.svg";
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.navWebName}>
                <div className={styles.webname}>
                    CornerFilms
                    <img src={logo} className={styles.logo} alt="logo" />
                </div>
            </NavLink>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={(navData) =>
                                navData.isActive ? styles.active : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={(navData) =>
                                navData.isActive ? styles.active : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <ButtonLogin></ButtonLogin>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
