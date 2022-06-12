import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import Titulo from "../components/Titulo";
import "./Register.css";


export function Register() {

  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
    await loginWithGoogle();
    navigate("/");
    } catch (error) {
    setError(error.message);
    }
};

  const divStyle = {
    backgroundImage: "url(https://i.imgur.com/9V62Mkn.png)"
  }

  return (
    <div className="Register">          
        <div style={divStyle} alt="Background" className="imgBG" >
            <div className="leftScreen">
                <div>
                    <Titulo/>
                    <br />
                    <p className="subtitulo">El lugar para volar a donde sea al alcance de tan sólo un clic.</p>
                 </div>
            </div>
        </div>
        <div className="rightScreen">
            <div className="top-login-box">
                <h2 className="titulo-login">
                    Crea tu cuenta
                </h2>
                <p className="alert-box">{error && <Alert message={error} />}</p>                                  
            </div>
            <div class="form-box">              
                <form onSubmit={handleSubmit} >
                    <div>
                        <label
                            htmlFor="email"
                            className="label-login"
                        >
                            Correo electronico
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="input-data"
                            placeholder="ejemplo@ejemplo.com"
                        />
                    </div>
                    <div className="mt-6">  
                        <label
                            htmlFor="password"
                            className="label-login"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"                            
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            className="input-data"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="enter-button">
                            Registrarse
                        </button>
                    </div>
                </form>
                <div class="mt-6">
                        <button
                            onClick={handleGoogleSignin}
                            className="login-google"
                        >
                            Registrate con Google
                        </button>
                    </div>
            </div>      
            <p className="go-to">
            ¿Ya tienes una cuenta?&nbsp;&nbsp;
            <Link to="/login" className="register-link">
                Inicia sesión	
            </Link>
            .
            </p>
        </div>
    </div>
  );
}