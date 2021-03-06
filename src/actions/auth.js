import { getAuth, signInWithPopup } from '@firebase/auth';

import { googleAuthProvider } from '../firebase/firebase-config';

import { types } from '../types/types';

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(123, 'Pedro' ) );
        }, 3500);
    }
}
export const startGoogleLogin = () =>{
    console.log('eyeyeyeye');
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) =>{
                dispatch( login( user.uid, user.displayName ) );
            });
    }
}

export const login = ( uid, displayName ) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}