import * as t from './constants';
import getUsersService from './services/getUsersService';


export const onLoad = () => ({
    type: t.PROFILES_INIT,
});

export const setUsers = (users, list) => ({
    type: t.PROFILES_SET,
    meta: {
        users,
        list,
    },
});

export const getUsers = () => (dispatch, getState) => {
    dispatch({ type: t.PROFILES_LOAD_START });
    dispatch({ type: t.PROFILES_LOAD_COMPLETE });

    getUsersService()
        .then(({ users, list }) => {
            dispatch(setUsers(users, list));
        });
};


export const setError = error => ({
    type: t.PROFILES_LOAD_FAILED,
    meta: {
        error,
    },
});
