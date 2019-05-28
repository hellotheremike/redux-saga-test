import * as t from './constants';


export const setUsers = () => ({
    type: t.PROFILES_SET,
    meta: {
        list: [
            {
                id: 1,
                row: 'Hello im a row',
            },
            {
                id: 2,
                row: 'Hello im a second row',
            },
        ],
    },
});


export const onLoad = () => ({
    type: t.PROFILES_INIT,
});
