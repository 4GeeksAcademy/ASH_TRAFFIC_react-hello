import React, { useState } from "react";



//create your first component
const Home = () => {

	let [ color, setColor ] = useState("");

	function changeColor(e) {
		setColor(e.target.id);
	}

	return (
		<div className="d-flex flex-column bg-dark justify-content-center">
			<div onClick={changeColor} id="red" className={`mx-auto rounded-pill bg-danger ${color == "red" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px' }}></div>
			<div onClick={changeColor} id="yellow" className={`mx-auto rounded-pill bg-warning ${color == "yellow" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px' }}></div>
			<div onClick={changeColor} id="green" className={`mx-auto rounded-pill bg-success ${color == "green" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px' }}></div>
		</div>
	);
};

export default Home;
