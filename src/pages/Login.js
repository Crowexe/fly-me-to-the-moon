import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import Titulo from "../components/Titulo";
import "./Login.css";

export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { login, loginWithGoogle, resetPassword } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
        await login(user.email, user.password);
        navigate("/");
        } catch (error) {
        setError(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
        await loginWithGoogle();
        navigate("/");
        } catch (error) {
        setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
        await resetPassword(user.email);
        setError('We sent you an email. Check your inbox')
        } catch (error) {
        setError(error.message);
        }
    };

    const divStyle = {
        backgroundImage: "url(https://i.imgur.com/9V62Mkn.png)"
    }

    return (
        <div className="Login">     
               
            <div style={divStyle} alt="Background" className="imgBG" >
                <div class="leftScreen">
                    <div>
                        <Titulo/>
                        <br />
                        <p class="subtitulo">El lugar para volar a donde sea al alcance de tan sólo un clic.</p>
                    </div>
                </div>
            </div>

            <div class="rightScreen">
                        <div className="top-login-box">
                            <h2 className="titulo-login">Iniciar sesión</h2>
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
                                        onChange={handleChange}
                                        className="input-data"
                                            placeholder="ejemplo@ejemplo.com"
                                    />
                                </div>

                                <div className="mt-6">
                                    <div className="my-4 text-sm flex justify-between">
                                        <label
                                            htmlFor="password"
                                            className="label-login"
                                        >
                                            Contraseña
                                        </label>
                                        <a
                                            className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                            href="#!"
                                            onClick={handleResetPassword}
                                        >
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password" 
                                        onChange={handleChange}
                                        className="input-data"
                                        placeholder="Contraseña"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        type="submit"
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </form>

                            <div class="mt-6">
                                <button
                                    onClick={handleGoogleSignin}
                                    className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
                                >
                                    Inicia sesión con Google
                                </button>
                            </div>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                ¿No tienes cuenta?&nbsp;&nbsp;
                                <Link to="/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                                    Registrate
                                </Link>
                                .
                            </p>
                        </div>
                </div>
        </div>
    );
}