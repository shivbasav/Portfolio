import { useEffect, useState, RefObject } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: Options = {}
): boolean => {
  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = true } = options;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin, freezeOnceVisible, isVisible]);

  return isVisible;
};
