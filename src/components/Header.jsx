import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./Container";
import { Button } from "./Button";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";

export const Header = () => {
  return (
    <>
      <header className=" bg-backgroundContrast  text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6 text-xl"
          >
            <span className=" sr-only">Back to homepage</span>
            <FontAwesomeIcon icon={faApple} />
          </a>
        </Container>
      </header>

      <div
        className=" sticky top-0 bg-backgroundContrast 
       px-6 text-white "
      >
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Test</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
