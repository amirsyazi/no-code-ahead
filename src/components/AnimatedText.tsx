import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedText = ({ children, delay = 0, className = "" }: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`fade-up ${className}`}>
      {children}
    </div>
  );
};