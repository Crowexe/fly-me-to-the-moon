import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import "./Profile.css";

export function Profile() {
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
      <div className="Profile-contenedor">
        <div className="Profile">
		  <Navbar />
        </div>
      </div>
    </>
  );
}