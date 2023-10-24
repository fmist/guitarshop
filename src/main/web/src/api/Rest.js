import axios from "axios";

export default class Rest {

    static request = axios.create({baseURL: "http://localhost:8083"})

    static loadData = async (setPosts) => {
        await Rest.request.get("/")
            .then(response =>  {
                setPosts(response.data)
                console.log(response.data)
                }
            )
    }

    static deleteProduct = async (id) => {
        await Rest.request.delete(`/delete/${id}`)
            .then((response) => {
                console.log(response.data)
                window.location.reload()
            })
    }

    static addProduct = async (post) => {
        await Rest.request.post("/add", post)
    }
}