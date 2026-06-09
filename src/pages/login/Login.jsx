import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useAuthStore} from "../../Store/use-auth-store";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleGoogleRegister = useCallback(async () => {
    try {
      await loginGoogleWithPopUp();
      navigate("/Profile");
    } catch (error) {
      console.error("Error en registro con Google:", error);
      
    }
  }, [loginGoogleWithPopUp, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <h2>Inicia sesión</h2>
      <form onSubmit={handleSubmit}>

        <label>Email:</label>
        <input type="email" placeholder="Ingresa tu correo" required />

        <label>Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" required />
        <button type="submit" onClick={signInWithEmailAndPassword}>Iniciar sesión</button>
        
      </form>
      <p>O ingresa con:</p>
      <button
        type="button"
        className="google-login"
        onClick={handleGoogleRegister}
      >
        <FcGoogle className="google-icon" />
        ingresa con Google
      </button>
      <p/>
    </div>
  );
};

export default Login;
