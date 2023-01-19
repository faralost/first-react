import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import {useState} from "react";
import {MyProduct} from "./models";

function App() {
    const [modal, setModal] = useState(true)
    const {products, loading, error, addProduct} = useProducts()

    const createHandler = (product: MyProduct) => {
        setModal(false)
        addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            {modal && <Modal title="Creating new product">
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
        </div>
    )
}

export default App;
