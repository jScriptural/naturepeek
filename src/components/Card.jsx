import "../assets/scss/card.scss";

 export default function Card({src,tags,alt}){


	 return(
		 <figure id="card">
		 <img src={src} alt={alt} />
		  <figcaption>{tags.filter(tag=>tag !== "all").map((tag,i)=><li key={i}>{tag}</li>)}</figcaption>
        	 </figure>
	 );
 }
