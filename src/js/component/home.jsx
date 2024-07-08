import React, { useState } from "react";



//create your first component
const Home = () => {

	let [ color, setColor ] = useState("");

	function changeColor(e) {
		setColor(e.target.id);
	}

	return (
		<div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
			<div className="d-flex flex-column align-items-center bg-dark p-3 rounded">
				<div className="bg-light p-2 rounded">
					<div onClick={changeColor} id="red" className={`rounded-pill bg-danger ${color == "red" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px', marginBottom: '10px' }}></div>
					<div onClick={changeColor} id="yellow" className={`rounded-pill bg-warning ${color == "yellow" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px', marginBottom: '10px' }}></div>
					<div onClick={changeColor} id="green" className={`rounded-pill bg-success ${color == "green" ? "opacity-100" : "opacity-50"}`} style={{ height: '50px', width: '50px' }}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
