import footer from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler, SyntheticEvent, useState } from "react";

export function Footer({
    onClick,
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event: SyntheticEvent) => {
        event.preventDefault();
        setIsActive((current) => !current);
    };

    const prevent = (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return (
        <footer className={footer.footer}>
            <ul className={footer.socials}>
                <li>
                    <a
                        href="www.twitter.com"
                        className={footer.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>

                <li>
                    <a
                        href="www.facebook.com"
                        className={footer.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a
                        href="www.instagram.com"
                        className={footer.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        href="www.github.com"
                        className={footer.socials}
                        onClick={prevent}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="/favorites"
                        className={
                            isActive ? footer.navlistitemactive : footer.socials
                        }
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                </li>
            </ul>
            <div className={footer.content}>
                <p>CornerFilms Developed by Sara Carreras</p>
            </div>
        </footer>
    );
}
