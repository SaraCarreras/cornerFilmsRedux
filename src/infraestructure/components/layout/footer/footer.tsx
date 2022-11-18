import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler, SyntheticEvent } from "react";

export function Footer({
    onClick,
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
    const prevent = (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return (
        <footer className={styles.footer}>
            <ul className={styles.socials}>
                <li>
                    <a
                        href="www.twitter.com"
                        className={styles.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>

                <li>
                    <a
                        href="www.facebook.com"
                        className={styles.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a
                        href="www.instagram.com"
                        className={styles.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        href="www.github.com"
                        className={styles.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
            <div className={styles.content}>
                <p>
                    CornerFilms Developed by Sara Carreras{" "}
                    <FontAwesomeIcon icon={faHeart} />
                </p>
            </div>
        </footer>
    );
}
