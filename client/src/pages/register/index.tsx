import { useRouter } from "next/router";
import { useEffect } from "react";
import { LoginComponent } from "../../components/LoginComponent";
import Nav from "../../components/NavBar";
import { RegisterComponent } from "../../components/RegisterComponent";
import { State } from "../../util/state";

export default function LoginPage() {
	const router = useRouter();
	useEffect(() => {
		// Check if user is logged in
		// If so, redirect to home page
		const user = State.get("user");
		if (user) {
			router.push("/");
		}
	}, []);
	return (
		<div>
			<Nav />
			<RegisterComponent />
		</div>
	);
}
