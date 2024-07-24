import { Button } from "../Button";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <div className=" relative bg-background text-white h-[300vh]">
      <div className=" absolute left-0 top-0 w-full">
        <img
          src="/images/napoleon.webp"
          alt=""
        />
      </div>

      <Container className="relative z-10 min-h-[--hero-height] flex flex-col justify-end">
        <h1 className="text-5xl font-bold">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>

        <Button size="large">Large button</Button>

        <p className="font-semibold">Watch on the 📺 app </p>
      </Container>
    </div>
  );
};
