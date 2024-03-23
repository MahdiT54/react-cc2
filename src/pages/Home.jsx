import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]); // set as empty array initially

  async function fetchUsers() {
    const { data } = await axios.get( // can be written as const response = await axios.get("https://jsonplaceholder.typicode.com/users"); const data = response.data;
      // destructuring the response
      "https://jsonplaceholder.typicode.com/users" // API endpoint
    );
    setUsers(data); // set the state with the response data
    console.log(data);
  }

  useEffect(() => {
    setTimeout(() => {
      // simulate a delay
      fetchUsers();
    }, 1000);
  }, []); // empty array as second argument to run only once

  function renderUsers() {
    return users.map((user) => (
      <Link key={user.id} to={`/users/${user.id}`}> 
        <User
          id={user.id} // pass the user's id, name, email, and username as props to the User component
          name={user.name}
          email={user.email}
          username={user.username}
        />
      </Link>
    ));
  }

  function renderSkeletonLoading() {
    return <h1>Loading...</h1>;
  }

  return <div>{users.length ? renderUsers() : renderSkeletonLoading()}</div>; // if users.length is truthy, renderUsers() is called, else renderSkeletonLoading() is called
}

export default Home;
