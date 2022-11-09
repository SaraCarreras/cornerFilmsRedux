import { Fragment } from "react";
import { Footer } from "../footer/footer";
import MainNavigation from "../header/header";

import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
