import {createContext,useState,useEffect} from "react";
import {auth} from "../../firebase.config.js";
import {onAuthStateChanged} from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({children}){
	const [user,setUser] = useState(null);

	useEffect(()=>{
		let unsubscribe;

         unsubscribe =  onAuthStateChanged(auth,(user)=>{
		setUser(user);

	  })
		console.log("sub",unsubscribe);
		return ()=>{
			if(unsubscribe)unsubscribe();
		}


	},[])
	return (
		<AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
	);
}

