import axios from "axios";

const apicarrito=axios.create()

export const apiAnadirProductoCarrito=async(id,idCarrito)=>{

    

    await apicarrito.post("http://localhost:4000/api/checkout/carrito-compras/agregar-producto",{
        "productoId":id,
        "carritoId":idCarrito
    })




}