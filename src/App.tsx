import Header from "./components/Header";
import { Container } from "./components/Container";
import { Hero } from "./components/section/hero";

import "./index.css";
import { Usps } from "./components/section/usps";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
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
