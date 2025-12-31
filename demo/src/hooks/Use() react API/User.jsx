import { use } from "react";

const userPromise = fetch("https://randomuser.me/api/")
    .then(res => res.json());

export default function User() {
    const data = use(userPromise);

    return (
        <ul>
            { data.results.map(user => (
                <li key={ user.login.uuid }>
                    { user.name.first } { user.name.last } <br />
                    { user.gender }
                </li>
            )) }
        </ul>
    );
}
