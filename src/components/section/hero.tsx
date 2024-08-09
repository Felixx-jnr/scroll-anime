import { useRef } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { useScroll, useTransform, motion } from "framer-motion";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <video
          className="sticky top-0 h-screen w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="/images/Johnnie Walker.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            JOHNNIE WALKER <br />
            KEEP WALKING
          </h1>
          <Button
            className="mb-16"
            size="large"
          >
            GET NOW
          </Button>
          <p className="font-semibold max-md:text-xs">
            Please do not share with anyone under the legal purchase age for
            alcohol. Drink responsibly
          </p>
        </motion.div>
      </Container>
    </div>
  );
};
