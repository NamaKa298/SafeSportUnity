import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  resetDelay?: number;
}

export const Typewriter = ({ text, speed = 100, resetDelay = 2000 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Réinitialise l'effet après un délai (resetDelay) une fois que le texte est entièrement affiché
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, resetDelay);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed, resetDelay]);

  return <>{displayedText}</>; // Affiche le texte tapé progressivement
};