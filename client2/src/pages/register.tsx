import { RegisterComponent } from "../components/RegisterComponent";
import Nav from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "../utils/state";

export default function RegisterPage() {
	const history = useNavigate(); // Use the 'useNavigate' hook to redirect to another page
	const state = useState(); // Call the State function to get the object with the methods

	useEffect(() => {
		// Check if user is logged in
		// If so, redirect to home page
		const user = state.get("user"); // Use the 'get' method from the state object
		if (user) {
			history("/");
		}
	}, [history, state]);

	return (
		<div>
			<RegisterComponent />
		</div>
	);
}
