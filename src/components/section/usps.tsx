import { Container } from "../Container";
import { FadeIn } from "../FadeIn";

export const Usps = () => {
  return (
    <Container className="relative z-10 max-w-[692px] space-y-12 py-36 text-3xl font-bold text-white md:text-4xl">
      <FadeIn>
        <p>Visit Johnnie Walker Princes Street in Edinburgh</p>
      </FadeIn>
      <FadeIn>
        <p>Make the difference With DrinkiQ</p>
      </FadeIn>
      <FadeIn>
        <p>Gift the unexpected</p>
      </FadeIn>
      <FadeIn>
        <p>Keep Walking With Us</p>
      </FadeIn>
    </Container>
  );
};
