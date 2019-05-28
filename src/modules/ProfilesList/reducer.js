import * as t from './constants';

const initialState = {
    list: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
    case t.PROFILES_SET:
        return Object.assign({}, state, {
            list: action.meta.list,
        });
    default:
        return state;
    }
};
