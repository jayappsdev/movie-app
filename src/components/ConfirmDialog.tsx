import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ConfirmDialogProps {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ show, message, onConfirm, onCancel }) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Potvrdenie akcie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onConfirm}>Áno, odstrániť</Button>
        <Button variant="secondary" onClick={onCancel}>Zrušiť</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDialog;

