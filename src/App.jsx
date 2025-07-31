import { BrowserRouter , Routes , Route } from "react-router-dom";
import Body from "./body";
import Login from "./login";
import Profile from "./profile";
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider>
    <BrowserRouter basename= "/">
    <Routes>
      <Route path="/" element={<Body />}>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />

      </Route>
    </Routes>
    
    </BrowserRouter>
    </Provider> 
    </>
  );
}

export default App;
