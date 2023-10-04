import {AuthContext} from "./context/AuthContext.jsx";
import {useContext} from "react";
import {auth} from "../firebase.config.js";	
import {signOut} from "firebase/auth";
import "../assets/scss/header.scss";


export default function Header(props){
      const user = useContext(AuthContext);
	const userCredentials = user.user;
	const username = userCredentials.email.slice(0,userCredentials.email.indexOf('@'));
	async function handleSignOut(e){
		try {
			await signOut(auth);
			user.setUser(null);
		}catch(e){
			console.log(e)
		}
	}
      return (
	      <header id="header">
	      <div className="user-profile">
	       <span className="fa fa-user-circle"></span><span className="username">Hi, {username}</span></div>

	      <button onClick={handleSignOut}  className="logout"><span className="fa fa-sign-out"></span><span>logout</span></button>


	      </header>
      )
	      
}

