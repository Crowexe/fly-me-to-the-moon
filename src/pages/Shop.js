import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import "./Shop.css";

export function Shop() {
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
      <div className="Shop-contenedor">
        <div className="Shop">
		      <Navbar />
        </div>
      </div>
    </>
  );
}