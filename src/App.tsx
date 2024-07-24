import Header from "./components/Header";
import { Container } from "./components/Container";
import { Hero } from "./components/section/hero";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
