import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";

const Profile = () =>{
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    if(!user)
        navigate("/login");
    
    return (
        user && <EditProfile user={user}/>

    );
};

export default Profile;