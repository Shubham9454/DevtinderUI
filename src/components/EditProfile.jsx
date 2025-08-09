import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./userCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import BASE_URL from "../utils/constants";
import { addUser } from "../utils/userSlice";
import Alert from "./Alert";
import ProfileCard from "./ProfileCard";

const EditProfile = ({ user }) => {
  // const userFromStore = useSelector((store) => store.user);
  const navigate = useNavigate();

  // if (userFromStore) return navigate("/");

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [error, setError] = useState("");

  const [success , setSuccess] = useState(false);

  const dispatch = useDispatch();

  const setProfile = async () => {
    setError("");
    try {
      
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, about, photoURL, skills },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));
      setSuccess(true);

      setTimeout(() =>{
        setSuccess(false);
      } , 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    
    <div className="flex justify-center my-5">
      <div className="mx-10">
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-xs border">
          <h1 className="">Edit you profile</h1>
          <div className="text-red-400">{error}</div>

          <label className="label">First Name</label>
          <input
            type="text"
            value={firstName}
            className="input"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label">Last Name</label>
          <input
            type="text"
            value={lastName}
            className="input"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="label">Age</label>
          <input
            type="number"
            value={age}
            className="input"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label className="label">Gender</label>
          <input
            type="text"
            value={gender}
            className="input"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <label className="label">About</label>
          <input
            type="text"
            value={about}
            className="input"
            placeholder="About"
            onChange={(e) => setAbout(e.target.value)}
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            className="input"
            placeholder="Photo URL"
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <label className="label">Skills</label>
          <input
            type="text"
            value={skills}
            className="input"
            placeholder="Skills"
            onChange={(e) => setSkills(e.target.value)}
          />

          <div className="flex justify-end my-1.5">
            <button className="btn btn-primary mx-0.5" onClick={setProfile}>
              Save
            </button>
            <button className="btn btn-soft mx-0.5">Cancel</button>
          </div>
        </fieldset>
      </div>
      <ProfileCard
        user={{ firstName, lastName, age, gender, about, photoURL, skills }}
      />
      {success && <div className="flex justify-end fixed up-5 right-1 z-50">
          <Alert type="success" />
      </div>} 

    </div>   
    
  );
};

export default EditProfile;
