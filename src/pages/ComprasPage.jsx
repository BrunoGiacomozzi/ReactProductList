
import { useContext } from 'react';
import { Card } from '../components/Card';
import { ProductsContext } from '../context/ProductsContext';
import { ShoppingCartContext } from '../context/ShoppingCartContext';


export const ComprasPage = () => {

    const productos = useContext(ProductsContext);

    const { listaCompras, agragarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } =
        useContext(ShoppingCartContext);

    const handleAgregar = (compra) => {
        agragarCompra(compra)
    }
    const handleAumentar = (id) => { }
    const handleDisminuir = (id) => { }
    const handleEliminar = (id) => {
        eliminarCompra(id)
    }


    return (
        <>
            <h1>Compras: </h1>
            <hr />
            {productos.map(producto => (
                <Card
                    key={producto.id}
                    image={producto.image}
                    title={producto.title}
                    description={producto.description}
                    price={producto.price}

                    handleAgregar={() => handleAgregar(producto)}

                    handleEliminar={() => handleEliminar(producto.id)}
                >
                </Card>
            ))}

        </>
    )
}
