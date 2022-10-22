import React, { useState, useEffect } from "react";
import { Container, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets/ListTweets";

import { TWEETS_STORAGE } from "./utils/contants";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const nameApplication = "Tweet Simulator";

  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
    result: null,
  });

  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    if (allTweetsArray) {
      setAllTweets(allTweetsArray);
    }
  }, []);

  const handleClose = () => {
    setToastProps({
      ...toastProps,
      open: false,
    });
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header title={nameApplication} />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        {toastProps.result ? (
          <Alert severity="info">{toastProps.text}</Alert>
        ) : (
          <Alert severity="error">{toastProps.text}</Alert>
        )}
      </Snackbar>
    </Container>
  );
}

export default App;
