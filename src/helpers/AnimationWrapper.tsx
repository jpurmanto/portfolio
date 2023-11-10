"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className: string;
}

export default function AnimationWrapper({
  children,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
