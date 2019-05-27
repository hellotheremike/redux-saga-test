
import Axios from 'axios';

const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
// Broken url
// const url = 'https://randomapi.com/api/HELLO-6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

const parseResponse = (data, timestamp) => {
    // throw new Error('I am a self inflicted error and hadles by saga!');

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
export default timestamp => Axios.get(url)
    .then(({ data }) => ({ response: parseResponse(data, timestamp) }))
    .catch(error => ({ error }));
