import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/auth.css'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const checkUser = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading indicator
        try {
            const res = await axios.post(`https://aibackend-1d3h.onrender.com/api/v1/auth/login`, {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = res.data;
            if(data.status === "success"){
                localStorage.setItem("authToken", data.data.token);
                navigate('/');
            } else {
                alert(data.msg);
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while logging in");
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    }

    return (
        <div className="authBox">
            <div id="signup" className="container">
                <h2>Log In</h2>
                <form onSubmit={checkUser}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    /><br />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    /><br />
                    <button type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                    <Link to="/signup"><button>SignUp</button></Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
