import { Link } from "react-router";

const User = (props) => {
  const { user } = props;
  return (
    <div className="border-2 border-amber-400 p-5 rounded-xl text-center space-y-4">
      <h1 className="text-2xl text-[#ffffff] font-semibold">{user.name}</h1>
      <p>Email - {user.email}</p>
      <p>Phone - {user.phone}</p>

      {/* <Link className="" to={`/user/${user.id}`}>User Details</Link> */}
      {/* or */}
      <Link to={`/user/${user.id}`}><button className="btn ml-1 btn-secondary">User Details</button></Link>
    </div>
  );
};

export default User;
