import Search from "./Search.jsx";
import Card from "./Card.jsx";
import {SearchContext} from "./context/SearchContext.jsx";
import {data} from "../assets/data.js";
import {useContext} from "react";
import "../assets/scss/container.scss";






export default function Container(props){
	 const context = useContext(SearchContext);
	console.log("c",context);
	let regexp = new RegExp(context.searchItem,"i");



	return (
		<div id="container">
		    <Search />
		<div className="img-container">
		{data.filter(item=>regexp.test(item.tags.join(","))).map(item=><Card key={item.id} src={item.url} tags={item.tags} alt={item.tags[0]+"-image.jpg"} />)}
		</div>
		</div>
	);


}


