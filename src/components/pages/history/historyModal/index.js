import "./historyModal.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { JobCard } from "./jobCard";
import { JobDetail } from "./jobDetail";
export const HistoryModal = ({ toggle, isOpen }) => {
  return (
    <Modal
      className="modal-fullscreen historyModal"
      isOpen={isOpen}
      toggle={toggle}
    >
      {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
      <ModalBody>
        <div className="row">
            <div className="col-md-12">

<div className="closeModal" onClick={toggle}>
    <img src={require('../../../../assets/img/upArrow.png')} />
</div>
            </div>

        </div>
        <div className="row">
          <div className="col-md-4">
            <JobCard />
          </div>
          <div className="col-md-8">
            <JobDetail toggle={toggle} />
          </div>
        </div>
      </ModalBody>
      
    </Modal>
  );
};
