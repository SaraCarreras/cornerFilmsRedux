import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { ButtonLogin } from "../button/button.login";

const MainNavigation = () => {
    const logo = "./dotpop.svg";
    return (
        <header className={classes.header}>
            <div className={classes.webname}>
                CornerFilms
                <img src={logo} className={classes.logo} alt="logo" />
            </div>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            className={(navData) =>
                                navData.isActive ? classes.active : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={(navData) =>
                                navData.isActive ? classes.active : ""
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

export default MainNavigation;
