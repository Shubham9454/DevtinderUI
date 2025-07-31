import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [emailID, setEmail] = useState("john123@gmail.com");
  const [password, setPassword] = useState("John@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          emailID,
          password,
        },
        { withCredentials: true }
      );

      console.log("Login Successful: " + res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-20">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Log in to your account</legend>

        <label className="label">Email</label>
        <input
          type="email"
          value={emailID}
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
