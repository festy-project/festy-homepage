import React from 'react';

import { motion, transform } from 'framer-motion';

interface Props {
  timeLinePercentage: number;
}
const Timeline = ({ timeLinePercentage }: Props) => {
  const percentage = () => {
    const toHundreds = timeLinePercentage * 100;

    if (toHundreds < 20) {
      return 20;
    }
    if (toHundreds > 80) {
      return 80;
    }
    return toHundreds;
  };

  const yTransformer = transform([20, 80], [-340, 300]);

  return (
    <motion.svg
      animate={{
        y: yTransformer(percentage()),
      }}
      transition={{
        type: 'tween',
      }}
      width="1845"
      height="21"
      viewBox="0 0 1845 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        zIndex: 999,
      }}
    >
      <rect width="78.8318" height="20.2498" rx="10" fill="#E43F5B" />
      <rect x="76.2104" y="9.1123" width="1768.79" height="2.02498" rx="1.01249" fill="#E43F5B" />
    </motion.svg>
  );
};

export default Timeline;
