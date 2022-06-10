
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
      
    <nav className="flex justify-around items-center flex-wrap bg-gray-800 p-3 rounded-b-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
                          <span className="font-semibold text-xl tracking-tight">Fly me to the Moon</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            </button>
        </div>
        <div className="w-screen block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm justify-between lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Inicio
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Tienda
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Acerca de nosotros
                </a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <span className="ml-2">Mi cuenta</span>
                  
                </a>
                <a href="#" className="inline-block text-sm leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <button
                    className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
                    onClick={handleLogout}
                    >
                    Cerrar sesión
                    </button>
                </a>
            </div>
        </div>
    </nav>
  );
}