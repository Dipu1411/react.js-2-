import React from 'react';
import useFetch from './useFetch';

export default function Users() {
    const [ data, loading ] = useFetch('https://randomuser.me/api/');

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <ul>
                {
                    data.results.map(user => (
                        <li key={ user.login.uuid }>
                            <img src={ user.picture.medium } alt="user pic" /> <br />
                            first name :  { user.name.first }
                            last name :  { user.name.last } <br />
                            gender :  { user.gender } <br />
                            city : { user.location.city } <br />
                            country : { user.location.country }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
