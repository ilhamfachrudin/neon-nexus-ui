import React, { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

export interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  continuous?: boolean;
}

export function GlitchText({
  text,
  as: Tag = 'span',
  className,
  color = '#00f0ff',
  intensity = 'medium',
  continuous = false,
}: GlitchTextProps) {
  const ref = useRef<HTMLElement>(null);

  const intervals = { low: 4000, medium: 2500, high: 1200 };
  const duration = { low: 400, medium: 600, high: 900 };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function glitch() {
      if (!el) return;
      el.setAttribute('data-glitch', 'true');
      setTimeout(() => el?.removeAttribute('data-glitch'), duration[intensity]);
    }

    if (continuous) {
      glitch();
      const id = setInterval(glitch, intervals[intensity]);
      return () => clearInterval(id);
    } else {
      const id = setInterval(glitch, intervals[intensity]);
      return () => clearInterval(id);
    }
  }, [continuous, intensity]);

  return (
    // @ts-ignore — dynamic tag
    <Tag
      ref={ref}
      data-text={text}
      className={clsx('glitch-text relative inline-block font-mono font-bold', className)}
      style={{ color } as React.CSSProperties}
    >
      {text}
    </Tag>
  );
}
