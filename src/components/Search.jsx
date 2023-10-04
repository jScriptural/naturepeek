import {useContext,useState} from "react";
import {SearchContext} from "./context/SearchContext.jsx";
import "../assets/scss/search.scss";


export default function Search(props){
	const context = useContext(SearchContext);
	const [searchTag,setSearchTag] = useState("");
	
	function handleInputChange(e){
		setSearchTag(e.target.value);
		const searchItem = searchTag.trim().length>0?searchTag.trim():"all";
		context.setSearchItem(searchItem);
	   console.log("si",searchItem)
		console.log("sT",searchTag);
	}
	function handleSubmit(e){
		e.preventDefault();
	 }
	return (
		<div id="search">
		 <form className="searchForm" onSubmit={handleSubmit}>
		    <input type="search" value={searchTag} placeholder="filter image by tag" name="searchTag" onChange={handleInputChange} />
		</form>
	       </div>
	);
}



