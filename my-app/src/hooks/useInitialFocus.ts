import { useEffect, useRef } from 'react';

function useInitialFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(() => {
      ref.current?.focus();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return ref;
}

export default useInitialFocus;
