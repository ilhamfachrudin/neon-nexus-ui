import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

export type NeonCardVariant = 'cyan' | 'violet' | 'default';

export interface NeonCardProps extends HTMLMotionProps<'div'> {
  variant?: NeonCardVariant;
  hover?: boolean;
  children: React.ReactNode;
}

const variantGlow: Record<NeonCardVariant, string> = {
  cyan:    'hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
  violet:  'hover:border-[#bd93f9] hover:shadow-[0_0_30px_rgba(189,147,249,0.15)]',
  default: 'hover:border-[#44475a] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]',
};

export function NeonCard({
  variant = 'cyan',
  hover = true,
  children,
  className,
  ...props
}: NeonCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={clsx(
        'relative rounded-xl border border-[#1e1e2e] bg-[rgba(18,18,26,0.8)]',
        'backdrop-blur-md p-6 transition-all duration-300',
        hover && variantGlow[variant],
        className,
      )}
      {...props}
    >
      {/* Corner accents */}
      <span aria-hidden className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current opacity-40 rounded-tl-xl" />
      <span aria-hidden className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current opacity-40 rounded-tr-xl" />
      <span aria-hidden className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current opacity-40 rounded-bl-xl" />
      <span aria-hidden className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current opacity-40 rounded-br-xl" />
      {children}
    </motion.div>
  );
}
