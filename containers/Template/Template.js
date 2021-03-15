import { motion, useIsPresent, usePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import Title from "../../components/Title";
import c from "classnames";
import { transPrimary } from "../../lib/config";
import { useAppContext } from "../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const variantsWithTransition = {
  animate: {
    position: "relative",
    y: 0,
    zIndex: 1,
  },
  exit: {
    position: "fixed",
    y: "-50vh",
    zIndex: 0,
  },
  initial: {
    y: "100vh",
  },
  transition: transPrimary,
};

const variantsWithoutTransition = {
  animate: {
    position: "relative",
    y: 0,
  },
  exit: {
    position: "fixed",
    y: 0,
  },
  initial: {
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
};

const Template = ({ children, name, title }) => {
  const [animState, setAnimState] = useState(null);
  const { appState, setTemplateTransition } = useAppContext();
  const { templateTransition } = appState;
  const displayOverlay = animState === "animExit" && templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) {
      setAnimState("animExit");
    }

    if (isPresent) {
      setAnimState("animStart");
    }
  }, [isPresent]);

  return (
    <>
      <Title title={title} />
      <motion.div
        className={c("Template", {
          [`Template--${name}`]: name,
        })}
        onAnimationComplete={() => {
          if (animState === "animExit") {
            console.log("enter");
            setTimeout(() => {
              setTemplateTransition(false);
            }, 1000);
            if (scroll) {
              scroll.destroy();
              scroll.init();
            }
          }
        }}
        onAnimationStart={() => {
          if (animState === "animStart" && templateTransition) {
            console.log("exit");
            if (scroll) {
              scroll.stop();
            }
          }
        }}
        {...(templateTransition
          ? { ...variantsWithTransition }
          : { ...variantsWithoutTransition })}
      >
        {children}
        {displayOverlay && (
          <motion.div
            exit={{
              backgroundColor: "var(--Template-overlayColor)",
              transition: transPrimary,
            }}
            className="Template-overlay"
          />
        )}
      </motion.div>
    </>
  );
};

export default Template;