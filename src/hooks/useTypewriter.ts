import { useState, useEffect } from 'react';

const phrases = [
  'Full-Stack Developer',
  'GenAI Engineer',
  'Builder of Things That Ship',
];

export const useTypewriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [delta, setDelta] = useState(80);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(40);
      } else {
        setDelta(80);
      }

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(tick, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delta]);

  return { text, isDeleting };
};
