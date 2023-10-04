import {Routes,Route} from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {PrivateRoute} from "./components/PrivateRoute.jsx";
import {AuthProvider} from "./components/context/AuthContext.jsx";
import Gallery from "./components/Gallery.jsx";


function App() {

  return (
    <AuthProvider>
	  <Routes>
	   <Route exact path="/" element={<PrivateRoute><Gallery /></PrivateRoute>} />
	   <Route exact path="/gallery" element={<PrivateRoute><Gallery /></PrivateRoute>} />
	   <Route exact path="/sign-in" element={<SignIn />} />
	   <Route exact path="/sign-up" element={<SignUp />} />
	  </Routes>

    </AuthProvider>
  );
}

export default App
