import Loading from "./Loading";
import { SyntheticEvent, useState } from "react";
import { useUser } from "../context/user";
import { firebase, firestore } from "../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "./Productos.css";

interface IProdutos {
    id: string,
    nombre: string,
	tipo: string,
	unidad: string,
	existencia: number,
    udi: string,
	precioV:number,
	precioC:number,
	identificador:string,
	createdAt: firebase.firestore.Timestamp
}

const productosRef = firestore.collection("productos");
const productosQuery = productosRef.orderBy("createdAt", "asc")

export default function Productos() {
    const [tipo, setTipo] = useState("");
    const [unidad, setUnidad] = useState("");
    const [nombre, setNombre] = useState("");
    const [precioV, setPrecioV] = useState("");
    const [precioC, setPrecioC] = useState("");
    const [existencia, setExitencia] = useState("");
    const [identificador, setIdenficador] = useState("");
    const { user } = useUser();
    const [productos, loading] = useCollectionData < IProdutos > (
        productosQuery,
        { idField: "id" }
    );

    console.log(tipo, unidad);

    const addProducto(event: SyntheticEvent) {
        event.preventDefault();

        if (nombre.trim().length < 1)
            return;
        if (identificador.trim().length < 1)
            return;
        if (tipo.trim().length < 1)
            return;
        if (unidad.trim().length < 1)
            return;
        if (precioV.trim().length < .5)
            return;
        if (precioC.trim().length < .5)
            return;
        if (existencia.trim().length < 0)
            return;

        if (user) {
            const { uid } = user;
            productosRef.add({
                nombre,
                uid,
                precioV,
                precioC,
                existencia,
                identificador,
                unidad,
                tipo,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        setNombre("");
        setPrecioV("");
        setPrecioC("");
        setExitencia("");
        setIdenficador("");
        setTipo("");
        setUnidad("");
    };

    const deleteProd = (id: string) => {
        firestore.collection('productos').doc(id).delete();
    };

    if (loading) {

        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <>

        </>
    );
}