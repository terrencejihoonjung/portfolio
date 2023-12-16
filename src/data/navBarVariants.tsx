export const navElements = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
    transition: { staggerChildren: 0.3 },
  },
};

export const navLine = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
  },
};

export const modalContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

export const navElement = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
