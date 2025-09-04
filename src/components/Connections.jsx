import axios from "axios";
import BASE_URL from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connectionData = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connectionData)
    return (
      <h1 className="flex justify-center my-20">Connection data not found</h1>
    );
  else if (connectionData.length === 0)
    return <h1>No Connectiontions found</h1>;

  return (
    <div className="flex justify-center">
      <ul className="list bg-base-150 rounded-box shadow-md w-1/2">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Your Connections list
        </li>

        {connectionData.map((connection) => {
          const { _id, firstName, lastName, age, gender, about, photoURL } =
            connection;

          return (
            <li key={_id} className="list-row">
              <div>
                <img className="h-auto w-10 mr-1 rounded-full" src={photoURL} />
              </div>
              <div>
                <div>{`${firstName} ${lastName}`}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <p className="list-col-wrap text-xs">{about}</p>
              {age ||
                (gender && (
                  <div className="justify-end">
                    <h1>{age + " " + gender}</h1>
                  </div>
                ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Connections;
