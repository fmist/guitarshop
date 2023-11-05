import axios from "axios";

export default class Rest {

    static request = axios.create({baseURL: "http://localhost:8083"})

    static loadProducts = async (setProducts) => {
        await Rest.request.get("/")
            .then(response =>  {
                setProducts(response.data)
                console.log(response.data)
                }
            )
    }

    static loadProduct = async (id, setProduct) => {
        await Rest.request.get(`/${id}`)
            .then(response =>
            setProduct(response.data))
    }

    static deleteProduct = async (id) => {
        await Rest.request.delete(`/delete/${id}`)
    }

    static addProduct = async (product) => {
        await Rest.request.post("/add", product)
    }

    static editProduct = async (id, product) => {
        await Rest.request.put(`/edit/${id}`, product)
    }

}