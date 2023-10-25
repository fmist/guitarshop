import React, {useEffect, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import Rest from "../api/Rest";
import {useNavigate, useParams} from 'react-router';

const EditBar = () => {
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
        Rest.loadProduct(id, setProduct)
    }, [])

    let navigate = useNavigate()

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
                    Rest.editProduct(id, product)
                        .then(r => {console.log(r.data)})
                    navigate("/")
                    window.location.reload()
                }
            }>Submit</Button>
        </Container>
    );
};

export default EditBar;