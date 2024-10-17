import useFirebaseAuth from "@/hooks/use-firebase-auth";
import { UserDocument } from "@/types/user";
import { Lasso } from "lucide-react";
import { createContext, useContext } from "react";

// prend toutes nos valeurs à l'initiale
const init = {
    uid: "",
    firstName: "",
    lastName: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
});

interface Props {
    children: React.ReactNode;
}
export function AuthUserProvider({ children }: Props) {

    const auth = useFirebaseAuth();

    return (
        <authUserContext.Provider
            value={{
                    authUser: auth.authUser as {
                        uid: string,
                        firstName: string,
                        lastName: string,
                        displayName: string,
                        emailVerified: boolean,
                        phoneNumber: string,
                        photoURL: string,
                        userDocument: UserDocument
                    },
                    authUserIsLoading: auth.authUserIsLoading,
                }
            }
        >
            {children}
        </authUserContext.Provider >
    )
}

export const useAuth = () => useContext(authUserContext);