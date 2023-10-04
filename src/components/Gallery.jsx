import {signOut} from "firebase/auth";
import {auth} from "../firebase.config.js";
import Header from "./Header.jsx";
import Container from "./Container.jsx";
import SearchProvider from "./context/SearchContext.jsx";



export default function Gallery(props){
	return (<>
		<Header />
		<div>
		 <h1 style={{fontSize:"1.5rem"}}>Welcome to <span style={{color:"green"}}>Naturepeek</span>.</h1>
		  <p style={{padding: 5}}>Immerse yourself in the wonder and serenity of our carefully curated gallery of awe-inspiring landscapes, mesmerizing wildlife, and breathtaking natural phenomena.</p>

		 </div>
		<SearchProvider>
		 <Container />
		 </SearchProvider>
		</>
	);

};

