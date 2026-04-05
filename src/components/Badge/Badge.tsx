import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export type NeonBadgeVariant = 'online' | 'warning' | 'error' | 'info' | 'neutral';

export interface NeonBadgeProps {
  variant?: NeonBadgeVariant;
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

const variants: Record<NeonBadgeVariant, { dot: string; text: string; bg: string; border: string }> = {
  online:  { dot: '#50fa7b', text: '#50fa7b', bg: 'rgba(80,250,123,0.08)',  border: 'rgba(80,250,123,0.25)' },
  warning: { dot: '#f1fa8c', text: '#f1fa8c', bg: 'rgba(241,250,140,0.08)', border: 'rgba(241,250,140,0.25)' },
  error:   { dot: '#ff5555', text: '#ff5555', bg: 'rgba(255,85,85,0.08)',   border: 'rgba(255,85,85,0.25)' },
  info:    { dot: '#00f0ff', text: '#00f0ff', bg: 'rgba(0,240,255,0.08)',   border: 'rgba(0,240,255,0.25)' },
  neutral: { dot: '#6272a4', text: '#6272a4', bg: 'rgba(98,114,164,0.08)',  border: 'rgba(98,114,164,0.25)' },
};

export function NeonBadge({
  variant = 'info',
  children,
  pulse = true,
  className,
}: NeonBadgeProps) {
  const v = variants[variant];
  return (
    <span
      className={clsx('inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border', className)}
      style={{ color: v.text, background: v.bg, borderColor: v.border }}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: v.dot }}
            animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: v.dot }} />
      </span>
      {children}
    </span>
  );
}
