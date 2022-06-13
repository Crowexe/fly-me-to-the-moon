import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import "./Home.css";

export function Home() {
  /*const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };*/

   

  return (
    <>
      <div className="home-contenedor">
        <div className="Home">
		      <Navbar />
        </div>
      </div>
    </>
  );
}