import { useState } from "react";
import { Fab, Modal } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";

import "./SendTweet.scss";
import ModalContainer from "../ModalContainer/ModalContainer";
import FormSendTweet from "../FormSendTweet/FormSendTweet";
import { TWEETS_STORAGE } from "../../utils/contants";

const SendTweet = (props) => {
  const { setToastProps } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (e, formValue) => {
    e.preventDefault();
    let allTweetsArray = [];

    if (!formValue.name || !formValue.tweet) {
      setToastProps({
        open: true,
        text: "Todos los campos son obligatorios!",
        result: false,
      });
    } else {
      formValue.time = moment();
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToastProps({
        open: true,
        text: "Tweet enviado con exito!",
        result: true,
      });
      closeModal();
    }
    allTweetsArray = [];
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
        <FormSendTweet sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
};

export default SendTweet;
