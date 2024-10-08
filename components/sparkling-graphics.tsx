'use client'

import { motion } from 'framer-motion'

export default function SparklingGraphicsComponent() {
    return (
        <>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                        delay: Math.random() * 2
                    }}
                />
            ))}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={`trail-${i}`}
                    className="absolute w-1 h-8 bg-gradient-to-b from-yellow-200 to-transparent"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, 100],
                        opacity: [1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </>
    )
}
