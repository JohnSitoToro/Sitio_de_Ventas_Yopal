import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useAuthStore} from "../../Store/use-auth-store";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";

const Register = () => {
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
    <div className="register-container">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>

        <label>Email:</label>
        <input type="email" placeholder="Ingresa tu correo" required />

        <label>Contraseña:</label>
        <input type="password" placeholder="Crea una contraseña" required />
        <button type="submit" onClick={signInWithEmailAndPassword}>Registrarse</button>
        
      </form>
      <p>O regístrate con:</p>
      <button
        type="button"
        className="google-register"
        onClick={handleGoogleRegister}
      >
        <FcGoogle className="google-icon" />
        Registrarse con Google
      </button>
      <p/>
    </div>
  );
};

export default Register;
