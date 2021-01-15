import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import {capitalize} from '../Utilities/Strings';
import CharacterModal from '../Components/CharacterModal';

function CharacterCard(props) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Col className='text-center px-0 my-1 col-md-auto'>
            <a style={{ cursor: 'pointer' }} onClick={() => setModalShow(true)}>
                <Card bg='dark' text='light' className="text-center m-2 d-inline-block h-100" style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={`https://api.genshin.dev/characters/${props.name}/icon`} rounded="true" className="p-2" style={{ width: "106px", alignSelf: "center"}}/>
                    <Card.Body className="py-0 px-2">
                        <Card.Text>{capitalize(props.name)}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
            <CharacterModal name={props.name} show={modalShow} onHide={() => setModalShow(false)} passFormData={props.passFormData} cs={props.cs}/>
        </Col>
    );
}

export default CharacterCard;