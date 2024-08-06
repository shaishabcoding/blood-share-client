import { Link } from "react-router-dom";

const SideBar = ({ links }) => {
  // const { user } = useAuth();
  const { user } = {
    user: {
      displayName: "Shaishab Chandra Shil",
      email: "shaishab316@gmail.com",
      photoURL: "/logo.png",
    },
  }; /* ToDo: remove */

  return (
    <div id="sidebar2">
      <Link
        to="/"
        className="btn btn-ghost text-lg lg:text-xl font-semibold lg:font-bold mt-2 px-4 lg:mb-2 lg:mt-4 flex flex-col gap-1 overflow-ellipsis text-balance"
      >
        <img className="w-[1.5em] dark:invert" src="/logo.png" />
        <span>Hi, {user.displayName.split(" ")[0].slice(0, 10)}</span>
      </Link>

      {links}
    </div>
  );
};

export default SideBar;
