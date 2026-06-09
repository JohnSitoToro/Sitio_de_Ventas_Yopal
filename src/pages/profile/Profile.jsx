import { useCallback, useEffect } from "react";
import { useAuthStore } from "../../Store/use-auth-store";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { userLooged, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout().then(() => navigate("/"));
  }, [logout, navigate]);

  useEffect(() => {
    if (!userLooged) return;
    const fetchData = async () => {
      const { displayName, email } = userLooged;
      const data = { displayName, email };
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok)
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
      } catch (error) {
        console.error(`Error creating user:`, error);
        throw error;
      }
    };
    fetchData();
  }, [userLooged]);

  return (
    <div className="profile-container">
      <img
        src={userLooged?.photoURL}
        alt="Avatar"
        className="profile-avatar"
      />
      <h2 className="profile-title">Perfil de usuario</h2>
      <p className="profile-name">
        ¡Bienvenido, {userLooged?.displayName || "Usuario"}!
      </p>
      <p className="profile-email">{userLooged?.email}</p>
      <button onClick={handleLogout} className="logout-button">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;