//import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import "../images/shopping-cart.png";
export function Navbar() {
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
			<div className="nav-header">
				<div className="nav-menu">					
					<a className="nav-links" href="/">Inicio</a>
					<a className="nav-links" href="/">Boletos</a>
					<a className="nav-links" href="/">Acerca de nosotros</a>
				</div>
				<div className="nav-search-bar">
					<input type="text" placeholder="Buscar"/>
				</div>
				<div className="nav-user">
					<div className="nav-user-profile">
						<img className="user-cart" src="https://i.imgur.com/dk7L5yL.png" alt="cart"/>
					</div>
					<div className="nav-user-profile">
						<img className="user-profile" src="https://i.imgur.com/lV8Y7L1.png" alt="profile"/>
					</div>
				</div>
			</div>
		</>
	);
}