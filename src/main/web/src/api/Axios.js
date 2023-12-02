import axios from "axios";

const request = axios.create({baseURL: "http://localhost:8083"})

export async function loadProducts(setProducts) {
    await request.get("/")
        .then(response => {
                setProducts(response.data)
                console.log(response.data)
            }
        )
}

export async function loadProduct(id, setProduct) {
    await request.get(`/${id}`)
        .then(response =>
            setProduct(response.data))
}

export async function deleteProduct(id) {
    await request.delete(`/delete/${id}`)
}

export async function addProduct(product) {
    await request.post("/add", product)
}

export async function editProduct(id, product) {
    await request.put(`/edit/${id}`, product)
}