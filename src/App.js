import { Container, Snackbar } from "@mui/material";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";

function App() {
  const nameApplication = "Tweet Simulator";

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header title={nameApplication} />
      <SendTweet />
    </Container>
  );
}

export default App;
