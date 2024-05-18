"use client";
import CountUp from "react-countup";

interface Props {
  value: number;
}

const AnimatedCounter = ({ value }: Props) => {
  return (
    <CountUp duration={1} end={value} decimal="," decimals={2} prefix="$" />
  );
};

export default AnimatedCounter;
