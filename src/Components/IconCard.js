import React from "react";
import Card from 'react-bootstrap/Card'
import {capitalize} from '../Utilities/Strings';
import Col from 'react-bootstrap/Col'

function IconCard(props) {
    return (
        <Col className='text-center px-0 my-1 col-md-auto'>
            <a style={{ cursor: 'pointer' }} onClick={() => {
                    props.toggleSelection(props.name)}}>
                <Card bg={props.selected ? 'secondary' : 'dark'} text='light' className="text-center m-2 d-inline-block h-100" style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={`https://api.genshin.dev/${props.type}/${props.name}/icon`} rounded="true" className="p-2" style={{ width: "106px", height: "106px", alignSelf: "center"}}/>
                    <Card.Body className="py-0 px-2">
                        <Card.Text>{capitalize(props.name)}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    );
}

export default IconCard;