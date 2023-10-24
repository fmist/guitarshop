import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import Rest from "../api/Rest";

export default function ShopList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Rest.loadData(setPosts)
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
                        <td className="text-right">
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