import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"


export const CarritoPage = () => {

    const { listaCompras, agragarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } =
        useContext(ShoppingCartContext);


    return (
        <>
            <table className="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.title}</th>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td> 1</td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => eliminarCompra(item.id)}>
                                    Eliminar
                                </button></td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary">Comprar</button>
            </div>
        </>

    )
}
