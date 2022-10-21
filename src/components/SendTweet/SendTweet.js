import { useState } from "react";
import { Fab, Modal } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";

import "./SendTweet.scss";
import ModalContainer from "../ModalContainer/ModalContainer";

const SendTweet = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <Add />
      </Fab>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <p>Contenido del modal</p>
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
