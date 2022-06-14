import { useAuth } from "../context/AuthContext";
import "./Profile.css";

export function Profile() {
  const { user } = useAuth();
 

  return (
    <>
      <div className="Profile-card">    
        <div className="Profile-card-header"> 
          <div className="name-user">
            {user.displayName}
            </div>
          </div>
          <div className="user-name">
            <a>EMAIL </a>{user.email}
          </div>
          <div className="user-name">
            <a>CARD </a>4321 1234 4321 1234
          </div>
        </div>
    </>
  );
}