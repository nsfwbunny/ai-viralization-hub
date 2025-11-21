'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { scale: 1.02, translateY: -5 } : {}}
            className={`
        relative overflow-hidden
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        rounded-2xl p-6
        ${className}
      `}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
