import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      // Error logic maybe redirect to error page.
      console.log(err);
    }
  };
  return (
    // 1. BACKDROP BLUR & BORDER (Glassmorphism Effect)
    <div className="navbar fixed top-0 z-[999] w-full h-16 bg-[#0D1117]/80 backdrop-blur-md border-b border-[#30363D]">
      {/* 2. MAX-WIDTH CONTAINER (Keeps content centered on big screens) */}
      <div className="flex flex-1 justify-between items-center w-full max-w-7xl mx-auto px-6">
        {/* LOGO */}
        <Link to="/" className="btn btn-ghost p-0 hover:bg-transparent">
          {/* If Logo has text, ensure it's font-bold tracking-tight */}
          <Logo />
        </Link>

        {/* JOIN BUTTON */}

        {user && (
          <div className="dropdown dropdown-end mx-5 flex ">
            <p className="px-4">Welcome,{user.firstName}</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="justify-between">
                  Requests
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
