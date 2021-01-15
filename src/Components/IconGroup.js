import React from 'react';
import Container from 'react-bootstrap/Container';
import IconCard from './IconCard';
import Row from 'react-bootstrap/Row'

function IconGroup(props) {
    

    return (
        <Container>
            <Row className="justify-content-center">
                {props.group.map((c, i) => <IconCard type={props.type} name={c} key={i} toggleSelection={props.toggleSelection} selected={props.sel[c]}/>)}
            </Row>
        </Container>
    );
}

export default IconGroup;