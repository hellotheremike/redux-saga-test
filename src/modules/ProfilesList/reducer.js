import * as t from './constants';

const initialState = {
    error: null,
    apiLoadTimestamp: 0,
    loading: false,
    list: [],
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case t.PROFILES_LOAD_START:
        return Object.assign({}, state, {
            loading: true,
            apiLoadTimestamp: new Date().getTime(),
        });
    case t.PROFILES_LOAD_COMPLETE:
        return Object.assign({}, state, {
            loading: false,
        });
    case t.PROFILES_SET:
        return Object.assign({}, state, {
            users: action.meta.users,
            list: action.meta.list,
        });
    case t.PROFILES_LOAD_FAILED:
        return Object.assign({}, state, {
            loading: false,
            error: action.meta.error,
        });
    default:
        return state;
    }
};
