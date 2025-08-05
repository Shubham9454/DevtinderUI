import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/constants";



const Login = () => {
  const userFromStore = useSelector((store) => store.user);
  const navigate = useNavigate();

  if(userFromStore) return navigate("/");

  const [emailID, setEmail] = useState("john123@gmail.com");
  const [password, setPassword] = useState("John@123");
  const [error , setError] = useState("");

  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailID,
          password,
        },
        { withCredentials: true }
      );

      //console.log("Login Successful: " + res.data);
      dispatch(addUser(res.data));
      navigate("/")
      
    } catch (err) {
      setError(err?.response?.data  || "Something Went Wrong");
      // console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-20">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Log in to your account</legend>
        <div className="text-red-400">{error}</div>

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
