import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import Rest from "../api/Rest";
import {useNavigate} from "react-router";
import ModalDeleteProduct from "../modals/ModalDeleteProduct";

export default function ShopList() {

    const [posts, setPosts] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        Rest.loadProducts(setPosts)
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Created</th>
                <th>Product</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((posts) => (
                    <tr key={posts.id}>
                        <td>{posts.time}</td>
                        <td>{posts.name}</td>
                        <td>{posts.description}</td>
                        <td className="text-right w-25">
                            <Button className="me-2"
                                    variant="primary"
                                    onClick={() => navigate(`/edit/${posts.id}`)}
                            >Edit
                            </Button>
                            <ModalDeleteProduct OnChange={() => Rest.deleteProduct(posts.id)}/>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};