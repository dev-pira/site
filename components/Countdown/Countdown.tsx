import {
  CountdownCircleTimer,
  Props as CountdownTimerProps,
} from "react-countdown-circle-timer";

interface MultipleColors {
  colors: { 0: `#${string}`; 1: `#${string}` } & `#${string}`[];
  colorsTime: { 0: number; 1: number } & number[];
}

interface CountdownProps
  extends Omit<CountdownTimerProps, "colors" | "colorsTime">,
    MultipleColors {}

const Countdown: React.FC<CountdownProps> = ({
  isPlaying = true,
  duration,
  colors,
  colorsTime,
  size = 100,
  strokeWidth = 6,
  onComplete = () => ({ shouldRepeat: false }),
  children = ({ remainingTime }) => <h1>{remainingTime}</h1>,
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        colors={colors}
        colorsTime={colorsTime}
        size={size}
        strokeWidth={strokeWidth}
        onComplete={onComplete}
      >
        {children}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
