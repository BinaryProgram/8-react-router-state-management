import { useLoaderData} from "react-router";
import User from "../User/User";

const Users = () => {
  /*
 we will learn latter state,useEffect and fetch to load data for react
 router.
*/
  const users = useLoaderData();

  return (
    <div>
      <h1 className="text-xl font-semibold text-white">
        Total Users - {users.length}
      </h1>
      <h2>Our Dedicated Users</h2>
      <div className="mt-3 grid grid-cols-3 gap-5">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
