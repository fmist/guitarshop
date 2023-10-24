import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import Rest from "../api/Rest";
import {useNavigate} from "react-router";

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
                <th>Product</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                posts.map((posts) => (
                    <tr key={posts.id}>
                        <td>{posts.name}</td>
                        <td>{posts.description}</td>
                        <td className="text-right w-25">
                            <Button variant="warning"
                                    onClick={() => navigate(`/edit/${posts.id}`)}
                            >Edit
                            </Button>
                            <Button variant="secondary"
                                    onClick={() => Rest.deleteProduct(posts.id)}
                            >Delete
                            </Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};