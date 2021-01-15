import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WeaponCard from './WeaponCard';

function WeaponGroup(props) {
    

    return (
        <Container>
            <Row className="justify-content-center m-3">
                {props.group.map((c, i) => <WeaponCard name={c} key={c} passFormData={props.passFormData} ws={props.ws}/>)}
            </Row>
        </Container>
    );
}

export default WeaponGroup;