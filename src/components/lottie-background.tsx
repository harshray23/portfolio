"use client";

import Lottie from "lottie-react";

const LottieBackground = () => {
  return (
    <Lottie
      path="/GradientDotsBackground.json"
      className="absolute inset-0 w-full h-full"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default LottieBackground;
