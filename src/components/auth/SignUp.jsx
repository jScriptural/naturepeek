import {useState} from "react";                   import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase.config.js";    import {useNavigate,Link} from "react-router-dom";
import "../../assets/scss/forms.scss";
export default function SignUp(props){
	const Redirect = useNavigate();
	const [check,setCheck] = useState(false);
        const [email,setEmail] = useState("");            const [passwd,setPasswd] = useState("");
	const [error,setError] = useState(null);
	const [loading,setLoading] = useState(false);
	const toggle = (e)=>{
		let form = e.target.form;
		setCheck(!check);
		let inputPasswd = form.password;
		
		inputPasswd.type= !check?"text":"password";
	}
	function handleSubmit(e){                                 e.preventDefault();
		setLoading(true);
		if(passwd.length <6) {
			setLoading(false);
			setError("password must be atleast six characters");
			return;
		}
		createUserWithEmailAndPassword(auth,email,passwd).then(userCredential=>{
			console.log("u",userCredential);
			setLoading(false);
			Redirect("/sign-in");
		}).catch(e=>{
			console.log("e",e);
			setLoading(false);
			setError("Email already in use");
		});
}
        return (<div id="signUp">
                <form className="form" onSubmit={handleSubmit}> 
		<legend>Sign up </legend>
		<input type="email" value={email}placeholder="Enter your email address" name="email" onChange={e=>setEmail(e.target.value)} onFocus={e=>{setError(null);setLoading(false)}} />                       <input type="password" value={passwd} onChange={e=>setPasswd(e.target.value)}  placeholder="Enter your password" name="password" onFocus={e=>{setError(null);setLoading(false)}}/>
		{error && <p className="error-feedback"><span className="fa fa-info"></span> {error}</p>}
	     <p><input value={check} type="checkbox" onChange={toggle} />  Show password</p>
		<button  type="submit">{loading?<i className="fa fa-spinner fa-spin"></i>:"Create Account"}</button>                                                                </form>
		<p>Has account? <Link to="/sign-in">log in</Link></p>
        </div>);                                                                                                                                                                                        }
	
