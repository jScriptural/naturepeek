import {useContext} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "./context/AuthContext.jsx";



export function PrivateRoute({children}){
	const user = useContext(AuthContext);
	console.log("private",user);

	return (<>
		{user.user?children:<Navigate replace to="/sign-in" />

		}
		</>);
}



