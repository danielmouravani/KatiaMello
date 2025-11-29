import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../constants';
import { Star } from 'lucide-react';

const Counter = ({ end, duration = 2000, decimals = 0, prefix = "", suffix = "" }: { end: number, duration?: number, decimals?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      const currentCount = easeOut(percentage) * end;
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 -mt-20 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <span className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-600 to-brand-400 mb-2 flex items-center gap-2">
                <Counter 
                  end={stat.value} 
                  decimals={stat.decimals} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
                {/* Add a star icon if it's the rating stat (value is 5 and decimals is 1 as a heuristic, or we could add a flag) */}
                {stat.value === 5 && stat.decimals === 1 && (
                  <Star className="text-amber-400 fill-amber-400" size={40} />
                )}
              </span>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{stat.label}</h3>
              <p className="text-slate-500 max-w-xs">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;