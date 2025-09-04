import axios from "axios";
import BASE_URL from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store) => store.request);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      //console.error(err.message);
    }
  };

  const handleRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
      
    } catch (err) {
      console.error(err.data);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requestData)
    return (
      <h1 className="flex justify-center my-20">Invitation's data not found</h1>
    );
  else if (requestData.length === 0)
    return (
      <h1 className="flex justify-center my-20">No Invitation's data found</h1>
    );

  return (
    <div className="flex justify-center">
      <ul className="list bg-base-100 rounded-box shadow-md w-1/2">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Your Invitation's List
        </li>

        {requestData.map((request) => {
          const { _id, firstName, lastName, photoURL } = request.fromUserId;

          return (
            <li key={_id} className="list-row">
              <div>
                <img className="h-auto w-10 mr-1 rounded-full" src={photoURL} />
              </div>
              <div>
                <div>
                  {firstName}
                  {" " + lastName}
                </div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-soft"
                onClick={() => handleRequest("rejected", request._id)}
              >
                Decline
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Requests;
