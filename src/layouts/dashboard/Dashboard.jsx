import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loading from "../../shared/loading/Loading";
import SideBar from "./components/SideBar";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useUsers from "../../hooks/useUsers";
import Navbar from "./components/Navbar";
import useMyRequests from "../../hooks/useMyRequests";
import useDonars from "../../hooks/useDonars";
import useRequests from "../../hooks/useRequests";

const Dashboard = () => {
  const [{ usersCount }] = useUsers();
  const [{ donarsCount }] = useDonars();
  const [{ requestsCount }] = useRequests();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  const [isAdmin] = useAdmin();
  const [requests] = useMyRequests();

  const links = (
    <ul className="menu menu-sm lg:menu-md">
      <li>
        <NavLink to="profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="blood-request">Blood Request</NavLink>
      </li>
      <li>
        <NavLink to="donation-profile">Donation Profile</NavLink>
      </li>
      <li>
        <NavLink to="my-request">My Request ({requests?.length})</NavLink>
      </li>
      {/* admin route */}
      {isAdmin && (
        <>
          <div className="border-t pt-1 mt-1 border-gray-300 dark:border-gray-500"></div>
          <li>
            <NavLink to="admin/users">Manage Users ({usersCount})</NavLink>
          </li>
          <li>
            <NavLink to="admin/donars">Menage Donars ({donarsCount})</NavLink>
          </li>
          <li>
            <NavLink to="admin/requests">
              Menage Requests ({requestsCount})
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <div className="bg-white h-screen dark:bg-black dark:text-white font-open-sans">
      <div className="md:hidden sticky top-0 z-50">
        <Navbar links={links} />
      </div>
      <div className="lg:px-28 md:h-screen flex flex-row lg:py-6 lg:gap-6">
        <div className="w-96 md:w-72 hidden md:block bg-gradient-to-br from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500 h-full lg:rounded-lg">
          <SideBar links={links} />
        </div>
        <div className="flex-grow h-full w-full md:p-2 pt-1 lg:p-0">
          {loading ? (
            <Loading />
          ) : (
            <div className="h-full w-full overflow-hidden lg:p-6 pt-6 px-2 pb-2 lg:mx-0 md:rounded-lg md:border bg-gradient-to-bl from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500">
              <div className="h-full w-full overflow-auto">
                <Outlet className="grow" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
