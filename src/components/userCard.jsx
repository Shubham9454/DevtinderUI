import axios from "axios";
import BASE_URL from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  const { _id , firstName, lastName, age, gender, about, photoURL, skills } = user;

  const [success , setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleConnection = async (status , userId) =>{
    try{

      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId ,
        {} , 
        {withCredentials: true}
      );
      
      dispatch(removeFeed(userId));
      setSuccess(true);

      setTimeout(() =>{
        return setSuccess(false);
      } , 3000);


    } catch(err){
      console.error(err.data);
    }
  }

  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img className="h-full w-full object-cover" src={photoURL} alt="Photo" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <h3 className="">{age + ", " + gender}</h3>}
        </div>

        <p>{about}</p>
        <div className="card-actions justify-end my-2">
          <button className="btn btn-primary" onClick={() => handleConnection("interested" , _id)}>Like</button>
          <button className="btn btn-soft" onClick={() => handleConnection("ignored" , _id)}>Dislike</button>
        </div>
      </div>
      {success && <div className="flex justify-end fixed up-5 right-1 z-50">
          <Alert type="success" />
      </div>} 
    </div>
  );
};

export default UserCard;
