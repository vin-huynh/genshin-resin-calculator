import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {capitalize} from '../Utilities/Strings';

const arrRange = (start, end) => {
    const arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
const phases = arrRange(0,6);
const levels = arrRange(1,10);
const talents = ['Normal','Skill','Burst'];

function CharacterModal(props) {

    const [formData, setFormData] = useState(props.cs[props.name] === undefined ? {
        name: props.name,
        curlv: 1,
        curasc: 0,
        curtal1: 1,
        curtal2: 1,
        curtal3: 1,
        tgtlv: 1,
        tgtasc: 0,
        tgttal1: 1,
        tgttal2: 1,
        tgttal3: 1
    } : props.cs[props.name]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.passFormData(formData);
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton />
            <Container className="p-4">
                <Form>
                    <Row className="justify-content-center w-auto m-2">
                        <Image src={`https://api.genshin.dev/characters/${props.name}/icon`} rounded="true" />
                    </Row>
                    <Row className="justify-content-center w-auto mb-4">
                        <h1>{capitalize(props.name)}</h1>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="justify-content-center w-auto"><Form.Label className="h4">Current State</Form.Label></Row>
                            <Row className="justify-content-center w-auto">
                                <Col className="col-md-auto p-2">
                                    <Form.Label>Lv. </Form.Label>
                                    <Form.Control type="number" name="curlv" onChange={handleChange} value={formData['curlv']} className="d-inline-block w-auto ml-2"/>
                                </Col>
                                <Col className="col-md-auto p-2">
                                    <Form.Label>Asc. </Form.Label>
                                    <Form.Control as="select" name="curasc" onChange={handleChange} value={formData['curasc']} className="d-inline-block w-auto ml-2">
                                        {phases.map((e, i) => <option key={i}>{e}</option>)}
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="justify-content-center w-auto mb-4">
                                <Col className="col-md-auto p-2">
                                    {talents.map((st, i) =>
                                    <div key={i} className="d-flex">
                                        <Form.Label className="m-2">{st + " Lv."}</Form.Label>
                                        <Form.Control as="select" name={`curtal${i+1}`} onChange={handleChange} value={formData[`curtal${i+1}`]} className="d-inline-block w-auto ml-auto">
                                            {levels.map((tl, j) => <option key={j}>{tl}</option>)}
                                        </Form.Control>
                                    </div>)}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-center w-auto"><Form.Label className="h4">Target State</Form.Label></Row>
                            <Row className="justify-content-center w-auto">
                                <Col className="col-md-auto p-2">
                                    <Form.Label>Lv. </Form.Label>
                                    <Form.Control type="number" name="tgtlv" onChange={handleChange} value={formData['tgtlv']} className="d-inline-block w-auto ml-2"/>
                                </Col>
                                <Col className="col-md-auto p-2">
                                    <Form.Label>Asc. </Form.Label>
                                    <Form.Control as="select" name="tgtasc" onChange={handleChange} value={formData['tgtasc']} className="d-inline-block w-auto ml-2">
                                        {phases.map((e, i) => <option key={i}>{e}</option>)}
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row className="justify-content-center w-auto">
                                <Col className="col-md-auto p-2">
                                    {talents.map((st, i) =>
                                    <div key={i} className="d-flex">
                                        <Form.Label className="m-2">{st + " Lv."}</Form.Label>
                                        <Form.Control as="select" name={`tgttal${i+1}`} onChange={handleChange} value={formData[`tgttal${i+1}`]} className="d-inline-block w-auto ml-auto">
                                            {levels.map((tl, j) => <option key={j}>{tl}</option>)}
                                        </Form.Control>
                                    </div>)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="justify-content-center w-auto">
                        <Button onClick={(e) => {
                            props.onHide();
                            handleSubmit(e);
                        }}>Update States</Button>
                    </Row>

                </Form>
            </Container>
        </Modal>
    )
}

export default CharacterModal;