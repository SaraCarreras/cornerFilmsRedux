import { useLoginRedux } from "../../hooks/use.loginredux";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import styles from "./loginbutton.module.scss";

export function ButtonLogin() {
    const log = useLoginRedux();
    const loginState = useSelector((state) => (state as RootState).login);

    return (
        <>
            <ul className={styles.nav}>
                <li className={styles.noImage}>
                    {loginState.photoURL ? (
                        <img
                            className={styles.img}
                            alt={loginState.name}
                            src={loginState.photoURL}
                        ></img>
                    ) : (
                        ""
                    )}
                </li>
                <li>
                    {loginState.name ? (
                        <button className={styles.btn} onClick={log.doLogout}>
                            Log out
                        </button>
                    ) : (
                        <input
                            className={styles.btn}
                            type="button"
                            value="Login"
                            onClick={log.doLogin}
                        />
                    )}
                </li>
            </ul>
            {/* <p className={loginbutton.name}>{loginState.name}</p> */}

            {/* OTRA FORMA
             <div>
                {loginState.name ? (
                    <button onClick={log.doLogout}>Log out</button>
                ) : (
                    <button onClick={log.doLogin}>Login</button>
                )}
            </div>
            <p>{loginState.name}</p>*/}
        </>
    );
}
