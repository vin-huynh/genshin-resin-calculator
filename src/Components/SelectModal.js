import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import IconGroup from './IconGroup';
import {capitalize} from '../Utilities/Strings';

function SelectModal(props) {
    const [tempSelection, setTempSelection] = useState(props.sel);
    const toggleSelection = (target) => {
      const newSelection = {...tempSelection};
      if (tempSelection[target] === undefined) {
        newSelection[target] = true;
      } else {
        newSelection[target] = !tempSelection[target];
      }
      setTempSelection(newSelection);
    }

    return (
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Select {capitalize(props.type)}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#222"}}>
            <IconGroup group={props.group} type={props.type} toggleSelection={toggleSelection} sel={tempSelection}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            props.onHide();
            props.updateSelected(tempSelection);
          }}>Update Selection</Button>
        </Modal.Footer>
      </Modal>
    );
}
  
export default SelectModal;