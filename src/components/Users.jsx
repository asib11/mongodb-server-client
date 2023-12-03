import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers);

    const handleDelete = _id => {
        console.log('delte', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(_id)
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }

    return (
        <div>
            <h1>total user {users.length}</h1>
            {
                users.map(user => <p
                    key={user._id}
                >
                    {user.name}: {user.email} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={() => handleDelete(user._id)}>X</button>
                </p>
                )
            }
        </div>
    );
};

export default Users;