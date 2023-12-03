import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleupdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        
    }
    return (
        <div>
            <p>update info {loadedUser.name}</p>
            <form onSubmit={handleupdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name} placeholder='Enter Your Name' />
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} placeholder='Enter Your Email' />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;