import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";
//import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
//import { iLogin } from "../interfaces/ilogin";
import { loginActionsCreators } from "../reducer/login.action.creators";

export function useLoginRedux() {
    const dispatch = useDispatch();

    const doLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        const user = auth.currentUser;
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const error: any = new Error("No credential");
                error.code = "";
                error.customData = { email: "" };
                if (!credential) throw error;
                // console.log({ token, user });
                dispatch(
                    loginActionsCreators.login({
                        uid: result.user.uid,
                        name: result.user.displayName,
                        email: result.user.email,
                        isLogged: true,
                        photoURL: result.user.photoURL,
                        favoritesArray: [],
                    })
                );
            })
            .catch((error) => {
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
                console.error({
                    errorCode: error.code,
                    errorMessage: error.message,
                    email: error.customData.email,
                    credential,
                });
            });

        if (user !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }
    };

    const doLogout = () => {
        signOut(getAuth())
            .then(() => {
                dispatch(loginActionsCreators.logout());
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return { doLogin, doLogout };
}
