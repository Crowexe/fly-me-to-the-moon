import { Navbar } from "../components/Navbar";
//import { useAuth } from "../context/AuthContext";
import { doc } from "firebase/firestore";
import "./Cart.css";


export function Cart() {
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
      <div className="Shop-contenedor">
        <div className="Shop">
          <Navbar />

          <section className="identificadores">
              <div>ID</div>
              <div>Aerolinea</div>
              <div>Destino</div>
              <div>Origen</div>
              <div>Estadia</div>
              <div>Fecha de ida</div>
              <div>Fecha de regreso</div>
              <div>Precio</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </section>
          <section className="boletos-lista">
              <div>{doc.id}</div>
              <div>{doc.compania}</div>
              <div>{doc.destino}</div>                
              <div>{doc.origen}</div>
              <div>{doc.escala}</div>
              <div>{doc.estanciad} días</div>
              <div>{doc.fecida}</div>
              <div>{doc.fecvuelta}</div>
              <div>$ {doc.precio}</div>
              <div className="buyer">
                <button className="buyer-button">
                  Cancelar
                </button>
              </div>
          </section>
          <div className="button-section">
          <button className="buyer-button" > 
            Pagar           
          </button>
          </div>
        </div>
      </div>
  );
}
