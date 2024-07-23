import Header from "./components/Header";
import { Container } from "./components/Container";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className=" h-[300vh]">
          <Container> Hero Component</Container>
        </div>
        <div>
          <Container> usp </Container>
        </div>
        <div>
          <Container> 3 column container </Container>
        </div>
        <div>
          <Container> carousel </Container>
        </div>
      </main>
    </>
  );
}

export default App;
