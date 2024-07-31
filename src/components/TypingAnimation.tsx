import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  start: number;
  end: number;
  interval: number;
  suffix?: string;
  prefix?: string; // Sufixo opcional para adicionar ao valor numérico
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ start, end, interval, suffix, prefix = '' }) => {
  const [currentValue, setCurrentValue] = useState(start);

  useEffect(() => {
    if (currentValue < end) {
      const timer = setTimeout(() => {
        setCurrentValue(currentValue + 1);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [currentValue, end, interval]);

  return (
    <span
      className="flex items-center font-bold text-yellow-400 dark:bg-[#fff1] py-1 px-3 rounded-xl"
      id="code-lines"
    >
      {prefix}{currentValue}{suffix}
    </span>
  );
};

export default TypingAnimation;