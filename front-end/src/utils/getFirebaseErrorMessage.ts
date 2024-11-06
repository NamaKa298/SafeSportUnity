/* eslint-disable */
import { signOut } from "firebase/auth"

const firebaseErrorMessages = {

    "firestore": {
        "permission-denied": "You do not have permission to access this resource.",
    },
    "createUserWithEmailAndPassword": {
        "auth/email-already-in-use": "The email address is already in use by another account.",
            "auth/invalid-email": "The email address is not valid.",
                "auth/operation-not-allowed": "The email/password accounts are not enabled.",
                    "auth/weak-password": "The password is too weak.",
     },
    "signInWithEmailAndPassword": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/user-disabled": "The user account has been disabled by an administrator.",
                "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "auth/wrong-password": "The password is invalid.",
     },
    "sendPasswordResetEmail": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        },
    "updateEmail": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/email-already-in-use": "The email address is already in use by another account.",
                "auth/requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        },
    "updatePassword": {
        "auth/weak-password": "The password is too weak.",
            "auth/requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        },
    "delete": {
        "auth/requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        },
    "reauthenticateWithCredential": {
        "auth/user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
            "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                "auth/wrong-password": "The password is invalid.",
        },
    "fetchSignInMethodsForEmail": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        },
    "verifyBeforeUpdateEmail": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/email-already-in-use": "The email address is already in use by another account.",
        },
    "confirmPasswordReset": {
        "auth/expired-action-code": "The action code has expired.",
            "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                "auth/user-disabled": "The user account has been disabled by an administrator.",
                    "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "auth/weak-password": "The password is too weak.",
        },
    "applyActionCode": {
        "auth/expired-action-code": "The action code has expired.",
            "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                "auth/user-disabled": "The user account has been disabled by an administrator.",
                    "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "auth/weak-password": "The password is too weak.",
        },
    "checkActionCode": {
        "auth/expired-action-code": "The action code has expired.",
            "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                "auth/user-disabled": "The user account has been disabled by an administrator.",
                    "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "auth/weak-password": "The password is too weak.",
        },
    "verifyPasswordResetCode": {
        "auth/expired-action-code": "The action code has expired.",
            "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                "auth/user-disabled": "The user account has been disabled by an administrator.",
                    "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                        "auth/weak-password": "The password is too weak.",
        },
    "signInWithCustomToken": {
        "auth/custom-token-mismatch": "The custom token corresponds to a different audience.",
            "auth/invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
        },
    "signOut": {
        "auth/no-such-provider": "User was not linked to an account with the given provider.",
        },
    "linkWithCredential": {
        "auth/email-already-in-use": "The email address is already in use by another account.",
            "auth/credential-already-in-use": "This credential is already associated with a different user account.",
                "auth/operation-not-allowed": "This operation is not allowed. You must enable this service in the console.",
                    "auth/invalid-credential": "The supplied auth credential is malformed or has expired.",
                        "auth/user-disabled": "The user's account has been disabled.",
                            "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                                "auth/wrong-password": "The password is invalid.",
        },
    "unlink": {
        "auth/no-such-provider": "User was not linked to an account with the given provider.",
        },
    "fetchProvidersForEmail": {
        "auth/invalid-email": "The email address is not valid.",
            "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        },
    "reauthenticateWithPhoneNumber": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "linkWithPhoneNumber": {
        "auth/credential-already-in-use": "This phone number is already associated with a different user account.",
            "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "updatePhoneNumber": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumber": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "reauthenticateWithPopup": {
        "auth/popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "auth/popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        },
    "reauthenticateWithRedirect": {
        "auth/redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
        },
    "signInWithPopup": {
        "auth/popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "auth/popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        },
    "signInWithRedirect": {
        "auth/redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
        },
    "linkWithPopup": {
        "auth/popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
            "auth/popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        },
    "linkWithRedirect": {
        "auth/redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
        },
    "signInAnonymously": {
        "auth/operation-not-allowed": "The given operation is not allowed.",
    },
    "signInWithPhoneNumber": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForExisting": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForNew": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForLinking": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForSignIn": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForUpdate": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForVerification": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForPasswordReset": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForEmailLink": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        },
    "verifyPhoneNumberForEmailLinkSignIn": {
        "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
            "auth/invalid-phone-number": "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
        }
};

export default firebaseErrorMessages;