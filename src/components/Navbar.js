import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
export function Navbar() {
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
			<div className="nav-header">
				<div className="nav-menu">					
					<a className="nav-links" href="/">Inicio</a>
					<a className="nav-links" href="/shop">Boletos</a>
					<a className="nav-links" href="/about">Acerca de nosotros</a>
				</div>
				<div className="nav-search-bar">
					<input type="text" placeholder="Buscar"/>
				</div>
				<div className="nav-user">
					<a className="nav-user-profile" href="/cart" >
						<img className="user-cart" src="https://i.imgur.com/EtrFZpQ.png" alt="cart"/>
					</a>
					<a className="nav-user-profile" href="/profile">
						<img className="user-profile" src="https://i.imgur.com/lV8Y7L1.png" alt="profile"/>
					</a>
					<a className="nav-user-profile">
						<img className="user-logout" src="https://i.imgur.com/cIIl90M.png" alt="Cerrar sesión" onClick={handleLogout} />
					</a>
				</div>
			</div>
		</>
	);
}