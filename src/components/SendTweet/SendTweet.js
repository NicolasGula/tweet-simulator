import "./SendTweet.scss";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import moment from "moment";

const SendTweet = () => {
  return (
    <div className="send-tweet">
      <Fab className="send-tweet__open-modal" color="primary" aria-label="add">
        <Add />
      </Fab>
    </div>
  );
};

export default SendTweet;
