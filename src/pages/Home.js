//import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "./Home.css";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
    <>
        <div className="Home">
          <div className="middle-box">                
              <div className="box">
                  <p className="p-welcome">Bienvenido/a, <br /> {user.displayName || user.displayEmail}</p>
                  <button
                  className="b-logout"
                  onClick={handleLogout}
                  >
                      Cerrar sesión
                  </button>
              </div>
          </div>
        </div>
    </>
  );
}