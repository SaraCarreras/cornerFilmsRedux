import { Footer } from "../footer/footer";
import MainNavigation from "../header/header";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <MainNavigation />
            <main>{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
