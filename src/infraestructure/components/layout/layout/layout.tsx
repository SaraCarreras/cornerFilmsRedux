import { Fragment } from "react";
import { Footer } from "../footer/footer";
import MainNavigation from "../header/header";

import classes from "./Layout.module.css";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
