import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

export type NeonButtonVariant = 'cyan' | 'violet' | 'green' | 'red' | 'ghost';

export interface NeonButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: NeonButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  glow?: boolean;
  scanline?: boolean;
}

const variantStyles: Record<NeonButtonVariant, string> = {
  cyan:   'border-[#00f0ff] text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.4)] hover:shadow-[0_0_24px_rgba(0,240,255,0.7)] hover:bg-[rgba(0,240,255,0.1)]',
  violet: 'border-[#bd93f9] text-[#bd93f9] shadow-[0_0_12px_rgba(189,147,249,0.4)] hover:shadow-[0_0_24px_rgba(189,147,249,0.7)] hover:bg-[rgba(189,147,249,0.1)]',
  green:  'border-[#50fa7b] text-[#50fa7b] shadow-[0_0_12px_rgba(80,250,123,0.4)] hover:shadow-[0_0_24px_rgba(80,250,123,0.7)] hover:bg-[rgba(80,250,123,0.1)]',
  red:    'border-[#ff5555] text-[#ff5555] shadow-[0_0_12px_rgba(255,85,85,0.4)] hover:shadow-[0_0_24px_rgba(255,85,85,0.7)] hover:bg-[rgba(255,85,85,0.1)]',
  ghost:  'border-[#44475a] text-[#6272a4] hover:border-[#00f0ff] hover:text-[#00f0ff]',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function NeonButton({
  variant = 'cyan',
  size = 'md',
  children,
  glow = true,
  scanline = true,
  className,
  ...props
}: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={clsx(
        'relative overflow-hidden font-mono font-semibold tracking-widest uppercase',
        'border bg-transparent rounded transition-all duration-300 cursor-pointer',
        'select-none outline-none focus-visible:ring-2 focus-visible:ring-current',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {scanline && (
        <motion.span
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          initial={{ y: '-110%', opacity: 0.15 }}
          whileHover={{ y: '110%', opacity: 0.15 }}
          transition={{ duration: 0.5, ease: 'linear' }}
          style={{
            background: 'linear-gradient(transparent 40%, currentColor 50%, transparent 60%)',
            mixBlendMode: 'overlay',
          }}
        />
      )}
      {children}
    </motion.button>
  );
}
