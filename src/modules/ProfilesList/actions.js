import * as t from './constants';


export const onLoad = () => ({
    type: t.PROFILES_INIT,
});

export const getUsers = () => ({
    type: t.PROFILES_LOAD,
});

export const setUsers = (users, list) => ({
    type: t.PROFILES_SET,
    meta: {
        users,
        list,
    },
});

export const setError = error => ({
    type: t.PROFILES_LOAD_FAILED,
    meta: {
        error,
    },
});
