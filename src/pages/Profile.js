import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";

export function Profile() {
  const { user } = useAuth();

  console.log(user);


   

  return (
    <>
      <div className="Profile-contenedor">
        <div className="Profile">
		      <Navbar />
            <div className="Profile-info">
              <p className="user-name">
                {user.displayName || user.email}
              </p>
            </div>
        </div>
      </div>
    </>
  );
}