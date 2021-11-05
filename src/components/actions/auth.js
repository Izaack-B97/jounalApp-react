import { types } from '../../types/types';

export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        setTimeout(() => {
            dispatch( login(123, 'Pedro' ) );
        }, 3500);
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