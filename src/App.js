import { useState } from "react";
import { Container, Snackbar } from "@mui/material";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";

function App() {
  const nameApplication = "Tweet Simulator";

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header title={nameApplication} />
      <SendTweet setToastProps={setToastProps} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={2000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
