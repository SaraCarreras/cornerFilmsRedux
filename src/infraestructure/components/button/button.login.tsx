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
                            src="https://lh3.googleusercontent.com/a/AItbvmkK1G_rJEhwAu4_MD9tesYhwfsA2eIra6yDrMqT=s96-c"
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
        </>
    );
}
