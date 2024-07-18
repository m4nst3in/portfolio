/*import React, { useState, useEffect } from 'react';

const TypingAnimation: React.FC = () => {
    const fullText = "Hello, I'm Vinicius.";
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);
  
    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;
  
      if (isDeleting) {
        setSpeed(100);
        setIsDeleting(false);
      }
  
      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setSpeed(150);
      } else {
        timer = setTimeout(() => {
          setText(currentText =>
            isDeleting ? currentText.slice(0, currentText.length - 1) : currentText + fullText[currentText.length]
          );
        }, speed);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, speed, fullText]);
  
    return <span>{text}</span>;
  };
  
  export default TypingAnimation;*/