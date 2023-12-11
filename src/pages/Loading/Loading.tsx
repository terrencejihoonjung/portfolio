import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="min-h-screen inset-0 flex justify-center items-center bg-background">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 20, opacity: 0 }}
        transition={{
          opacity: { delay: 2.5 },
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeIn",
          damping: 100,
        }}
        className="mb-32 flex font-lato text-lg font-bold text-text"
      >
        <p>Loading</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </motion.div>
    </div>
  );
}

export default Loading;
