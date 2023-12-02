import React, {useEffect, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {editProduct, loadProduct} from "../api/Axios";
import {useNavigate, useParams} from 'react-router';

const EditBar = () => {
    let navigate = useNavigate()
    const [product, setProduct] = useState(
        {
            name: "",
            description: ""
        }
    )

    const onInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const {id} = useParams()

    useEffect(() => {
      loadProduct(id, setProduct)
    }, [id])

    return (
        <Container className="w-50">
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Name
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    id="name"
                    name="name"
                    type="name"
                    value={product.name}
                    onChange={(e) => onInputChange(e)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Desc
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    id="description"
                    name="description"
                    type="description"
                    value={product.description}
                    onChange={(e) => onInputChange(e)}
                />
            </InputGroup>
            <Button onClick={
                function () {
                    editProduct(id, product)
                    navigate("/")
                    window.location.reload()
                }
            }>Submit</Button>
        </Container>
    );
};

export default EditBar;