import { useDispatch, useSelector } from "react-redux";
import Logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () =>{
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () =>{
    try{

      await axios.post(BASE_URL + "/logout" , {} , { withCredentials: true});
      dispatch(removeUser());
      return navigate("/login");
    }
    catch(err){
      console.error(err);
    }

  }

    return (

      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-cyan-500 mr-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <Link to="/">devTinder</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#matching" className="text-gray-300 hover:text-cyan-400 transition-colors">Matching</a>
              <a href="#stories" className="text-gray-300 hover:text-cyan-400 transition-colors">Success Stories</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-300 hover:text-cyan-400 font-medium transition-colors">
                Log In
              </Link>
              <Link to="/login" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-medium shadow-lg">
                Sign Up
              </Link>
            </div>
            {user && (
        
            <div className="dropdown dropdown-end">Welcome, {user.firstName} 
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mx-1.5"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="MyPhoto"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/connections"}>Connections</Link>
              </li>
              <li>
                <Link to={"/requests"}>Invitations</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>)}
          </div>
        </div>
      </nav>

    
        
          
    );
}

export default Navbar;