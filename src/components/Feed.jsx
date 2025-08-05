import axios from "axios";
import BASE_URL from "../utils/constants";

const Feed = () =>{

    const getFeed = async () =>{
        const res = await axios.get(BASE_URL + "/feed" , {} , {withCredentials: true});
        
    }
    return (
        <h1>Feed Page</h1>
    );
}

export default Feed;