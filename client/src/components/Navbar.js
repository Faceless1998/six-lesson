import { Link } from "react-router-dom";
import { isLoggedIn } from "../auth";

export default function Navbar(){
    return(
        <>
            <nav>

                <Link to="/">Home</Link>

                {
                    isLoggedIn() ? (
                        <>
                            <button>Logout</button>
                        </>
                    ):(
                        <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                    )
                }

            </nav>
        </>
    )
} 