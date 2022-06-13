import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import "./About-us.css";

export function About() {
  //const { logout, user } = useAuth();
//
  //console.log(user);
  //const handleLogout = async () => {
  //  try {
  //    await logout();
  //  } catch (error) {
  //    console.error(error.message);
  //  }
  //};

   

  return (
    <>
      <div className="About-contenedor">
        <div className="About">
		  <Navbar />
        </div>
      </div>
    </>
  );
}