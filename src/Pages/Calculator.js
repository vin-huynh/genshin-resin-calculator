import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SelectModal from '../Components/SelectModal';
import CharacterGroup from '../Components/CharacterGroup';
import WeaponGroup from '../Components/WeaponGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {toResin, resinToDays} from '../Calculations/Materials';

const worldLevels = [0,1,2,3,4,5,6,7,8];

function Calculator() {
    const [charModalShow, setCharModalShow] = useState(false);
    const [weaponModalShow, setWeaponModalShow] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [selectedWeapons, setSelectedWeapons] = useState([]);
    const [characterStates, setCharacterStates] = useState({});
    const [weaponStates, setWeaponStates] = useState({});
    const [resinCost, setResinCost] = useState(0);
    const [worldLevel, setWorldLevel] = useState(6);
    const [adventureRank, setAdventureRank] = useState(45);

    const updateSelectedCharacters = (characters) => {
        const newSelected = Object.keys(characters).filter(c => characters[c]).sort();
        setSelectedCharacters(newSelected);
    }

    const updateSelectedWeapons = (weapons) => {
        const newSelected = Object.keys(weapons).filter(c => weapons[c]).sort();
        setSelectedWeapons(newSelected);
    }

    const toModalFormat = (selArr) => {
        const selObj = {};
        selArr.forEach(e => selObj[e] = true);
        return selObj;
    }

    const updateCharacterStates = (formData) => {
        setCharacterStates({
            ...characterStates,
            [formData.name]: formData
        });
        console.log(formData,characterStates);
    }

    const updateWeaponStates = (formData) => {
        setWeaponStates({
            ...weaponStates,
            [formData.name]: formData
        });
        console.log(formData,weaponStates);
    }

    useEffect(() => {
        fetch(`https://api.genshin.dev/characters`)
        .then(res => res.json())
        .then(res => setCharacters(res))
    }, []);

    useEffect(() => {
        fetch(`https://api.genshin.dev/weapons`)
        .then(res => res.json())
        .then(res => setWeapons(res))
    }, []);

    return (
        <Container className="text-center">
            <Container className='py-3 px-1'>
                <h1 className="m-2">Characters</h1>
                <SelectModal type="characters" group={characters} show={charModalShow} onHide={() => setCharModalShow(false)} 
                    updateSelected={updateSelectedCharacters} sel={toModalFormat(selectedCharacters)} />
                <CharacterGroup group={selectedCharacters} passFormData={updateCharacterStates} cs={characterStates}/>
                <Button variant="primary" onClick={() => setCharModalShow(true)} className='my-2'>
                    Select Characters
                </Button>
            </Container>
            <Container className='py-3 px-1'>
                <h1 className="m-2">Weapons</h1>
                <SelectModal type="weapons" group={weapons} show={weaponModalShow} onHide={() => setWeaponModalShow(false)} 
                    updateSelected={updateSelectedWeapons}  sel={toModalFormat(selectedWeapons)}/>
                <WeaponGroup group={selectedWeapons} passFormData={updateWeaponStates} ws={weaponStates}/>
                <Button variant="primary" onClick={() => setWeaponModalShow(true)} className='my-2'>
                    Select Weapons
                </Button>
            </Container>
            <Container className='py-3 px-1'>
                <Form>
                    <Row className="justify-content-center w-auto"><Form.Label className="h4">World Info</Form.Label></Row>
                    <Row className="justify-content-center w-auto">
                        <Col xs="auto" className="p-2">
                            <Form.Label>WL</Form.Label>
                            <Form.Control as="select" name="wl" onChange={(e) => setWorldLevel(e.target.value)} value={worldLevel} className="d-inline-block w-auto ml-2">
                                {worldLevels.map((e, i) => <option key={i}>{e}</option>)}
                            </Form.Control>
                        </Col>
                        <Col xs="auto" className="p-2">
                            <Form.Label>AR</Form.Label>
                            <Form.Control type="number" name="ar" onChange={(e) => setAdventureRank(e.target.value)} value={adventureRank} className="d-inline-block w-auto ml-2"/>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Container className='py-3 px-1'>
                <Button onClick={() => setResinCost(toResin(adventureRank, worldLevel, selectedCharacters, selectedWeapons, characterStates, weaponStates))}>
                    Calculate
                </Button>
                <Container>
                    <Row className="justify-content-center w-auto m-2">
                        <Col className="col-md-auto p-2"><h3>{resinCost}</h3>Resin</Col>
                        <Col className="col-md-auto p-2"><h3>{resinToDays(resinCost)}</h3>Days</Col>
                    </Row>
                </Container>
            </Container>

        </Container>
    );
}

export default Calculator;