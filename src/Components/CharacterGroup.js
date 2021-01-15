import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CharacterCard from './CharacterCard';

function CharacterGroup(props) {
    

    return (
        <Container>
            <Row className="justify-content-center m-3">
                {props.group.map((c, i) => <CharacterCard name={c} key={c} passFormData={props.passFormData} cs={props.cs}/>)}
            </Row>
        </Container>
    );
}

export default CharacterGroup;