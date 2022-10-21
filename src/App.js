import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  const nameApplication = "Tweet Simulator";

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header title={nameApplication} />
    </Container>
  );
}

export default App;
