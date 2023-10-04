import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase.config.js";
import {useNavigate,Link} from "react-router-dom";
import "../../assets/scss/forms.scss";


//const auth = getAuth();

export default function SignIn(props){
	const Redirect = useNavigate();
	const [check,setCheck] = useState(false);
	const [email,setEmail] = useState("");
	const [passwd,setPasswd] = useState("");
	const [error,setError] = useState(null);
	const [loading,setLoading] = useState(false);
	const toggle = (e)=>{                                     let form = e.target.form;                         setCheck(!check);                                 let inputPasswd = form.password;                                                                    inputPasswd.type= !check?"text":"password";                                                 }
	function handleSubmit(e){
		e.preventDefault();
		setLoading(true);

		signInWithEmailAndPassword(auth,email,passwd)
	 .then(user=>{
		 console.log("u",user);
		 setLoading(false);
		 Redirect("/gallery");
	 }).catch(e=>{
		 console.log("e",e.message)
		 setLoading(false);
		 setError("Invalid login credentials");

	 })

	}
	return (<div id="signIn">
		<form className="form" onSubmit={handleSubmit}>
		<legend>Login</legend>
		 <input type="email" value={email}placeholder="Enter your email address" name="email" onChange={e=>setEmail(e.target.value)} onFocus={e=>{setError(null);setLoading(false)}} required/>
		<input type="password" value={passwd} onChange={e=>setPasswd(e.target.value)}  placeholder="Enter your password" name="password" onFocus={(e)=>{setError(null);setLoading(false)}} required />
		{error && <p className="error-feedback"><span className="fa fa-info"></span>{error}</p>}
		<p><input value={check} type="checkbox" onChange={toggle} name="checkbox"/>  Show password</p>
	
		<button name="submit" type="submit">{loading?<i className="fa fa-spinner fa-spin"></i>:"Login"}</button>
		</form>
		<div className="help">
		<p>No account? 	<Link replace to="/sign-up">sign up</Link></p>
		<Link to="reset-password" >Forgotten password?</Link>
		</div>

	</div>);



}

