import React, {useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import Rest from "../api/Rest";
import { useNavigate } from 'react-router';

const InputBar = () => {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const post = {name, description}
    let navigate = useNavigate()

    return(
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
                value={name || ''}
                onChange={e =>  setName(e.target.value)}
            />
        </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Desc
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    id="desc"
                    name="desc"
                    type="desc"
                    value={description || ''}
                    onChange={(e) =>  setDescription(e.target.value)}
                />
            </InputGroup>
            <Button onClick={
                function (event) {
                    Rest.addProduct(post)
                        .then(response => console.log(post));
                    navigate("/")
                    window.location.reload()
                }
            }>Submit</Button>
        </Container>
    );
};

export default InputBar;