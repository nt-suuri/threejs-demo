import { useState, useEffect } from "react";

import Typewriter from "typewriter-effect";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { useSpring, animated } from "react-spring";
import { DivInview } from "../../../Animations/DivInView";

const Landing = () => {
  const { height, width } = useWindowDimensions();

  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: showText ? 1 : 0 },
    config: { duration: 1000 },
  });

  const arrowFadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: showArrow ? 1 : 0 },
    config: { duration: 500 },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShowArrow(window.pageYOffset < 20)
      );
    }
    setTimeout(() => {
      setShowText(true);
    }, 1400);
    setTimeout(() => {
      setShowArrow(true);
    }, 2800);
  }, []);

  return (
    <div className="bg-slate-400 dark:bg-black">
      {width && width < 700 ? (
        <div className="absolute h-2/3">
          <h1
            className={`text-4xl small-text text-white top-24 mt-12 mx-10 relative font-bold z-30`}
          >
            <div className="tall-lines">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(45)
                    .typeString("We value balance")
                    .start();
                }}
              />
            </div>
          </h1>
          <animated.div
            style={fadeStyles}
            className="top-28 left-10 relative z-30 w-3/4 text"
          >
            <h1 className="text-xl text-white tall-lines">
              By taking advantage of the flexibility, and fast adaptability of
              nomads we can master advanced technology first to aid our business
              while maintaining close contact with our customers
            </h1>
          </animated.div>
        </div>
      ) : (
        <div className="absolute h-1/3">
          <h1
            className={`text-8xl text-white top-2/3 left-1/4 lg:left-64 w-96 relative font-bold z-30`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(45)
                  .typeString("We value balance")
                  .start();
              }}
            />
          </h1>
          <animated.div
            style={fadeStyles}
            className="top-2/3 left-1/4 lg:left-64 mt-16 ml-5 relative z-30 w-96 "
          >
            <h1 className="text-3xl text-white">
              By taking advantage of the flexibility, and fast adaptability of
              nomads we can master advanced technology first to aid our business
              while maintaining close contact with our customers
            </h1>
          </animated.div>
        </div>
      )}
      <animated.div style={arrowFadeStyles}>
        <div className="fixed bottom-8 w-screen z-30">
          <div className="scroll-down-dude w-4 mx-auto" />
        </div>
      </animated.div>
    </div>
  );
};

export default Landing;
