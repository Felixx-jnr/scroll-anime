import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./Container";
import { Button } from "./Button";

export const Header = () => {
  return (
    <>
      <header className="bg-brown relative z-20 text-white ">
        <Container className="flex min-h-[--header-row-height] items-center">
          <div className="w-[100%] ">
            <img
              className="-ml-6 flex h-[--header-row-height] items-center px-6 w"
              src="/images/logo.png"
              alt=""
            />
          </div>
        </Container>
      </header>
      <div className="bg-brown sticky top-0 z-20 text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <div>
            <img
              className="-ml-6 flex h-[--header-row-height] items-center px-6"
              src="https://www.johnniewalker.com/inc/images/global/JohnnieWalkerNavigation.svg"
              alt=""
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
