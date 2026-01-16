import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import LogoIcon from "./LogoIcon";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center items-center my-20">
      <div className="card bg-base-200 w-96 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="flex flex-col items-center mb-4">
            <LogoIcon width={50} className="mb-2" />
            <h2 className="card-title justify-center text-2xl font-header text-primary">
              Login
            </h2>
            <p className="text-sm text-base-content/70 font-body">
              Welcome back, dev.
            </p>
          </div>

          <div className="w-full">
            <fieldset className="fieldset p-0 mb-4 border-none">
              <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                &lt;EmailID /&gt;
              </legend>
              <input
                type="text"
                value={emailId}
                placeholder="user@devtinder.com"
                className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset p-0 mb-4 border-none">
              <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                &lt;Password /&gt;{" "}
              </legend>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary focus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>

          <div className="card-actions justify-end mt-6">
            <button
              className="btn btn-primary w-full font-header text-lg text-white shadow-[0_0_10px_rgba(88,166,255,0.2)] hover:shadow-[0_0_20px_rgba(88,166,255,0.5)] border-none transition-all duration-300"
              onClick={handleLogin}
            >
              Login_
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
