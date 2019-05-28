
import Axios from 'axios';

const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

export default async (timestamp) => {
    const { data } = await Axios.get(url);

    const list = data
        .reduce((acc, { email, first, last }) => [...acc, {
            row: `${first} ${last}`,
            id: timestamp + email,
        }], []);

    return {
        users: data,
        list,
    };
};
