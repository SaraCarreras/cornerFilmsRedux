import { iLogin } from "../interfaces/ilogin";

export interface iContext {
    isLogged: boolean;
    setIsLogged: Function;
    userLogged: iLogin;
    setUserLogged: Function;
}
