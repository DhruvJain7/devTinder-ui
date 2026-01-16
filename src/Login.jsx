import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [emailId, setEmailId] = useState("dhruv@gmail.com");
  const [password, setPassword] = useState("Dhruv@123");

  const handleLogin = async () => {
    try {
      axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset my-1">
              <legend className="fieldset-legend ">Email ID </legend>
              <input
                type="text"
                value={emailId}
                className="input my-1"
                onChange={(e) => setEmailId(e.targetvalue)}
              />
            </fieldset>
            <fieldset className="fieldset my-1">
              <legend className="fieldset-legend ">Password </legend>
              <input
                type="text"
                value={password}
                className="input my-1"
                onChange={(e) => setPassword(e.targetvalue)}
              />
            </fieldset>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
