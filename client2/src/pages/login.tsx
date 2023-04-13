import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginComponent } from "../components/LoginComponent";
import Nav from "../components/NavBar";
import { State } from "../utils/state";

export default function LoginPage() {
  const history = useNavigate(); // Use the 'useNavigate' hook to redirect to another page
  const state = State(); // Call the State function to get the object with the methods

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
      <Nav />
      <LoginComponent />
    </div>
  );
}
