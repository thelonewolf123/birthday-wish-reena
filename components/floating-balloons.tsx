'use client'

import { motion } from 'framer-motion'

const balloonColors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400'
]

export default function FloatingBalloonsComponent() {
    return (
        <>
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-12 h-16 ${
                        balloonColors[i % balloonColors.length]
                    } rounded-full`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: '100%'
                    }}
                    animate={{
                        top: '-20%',
                        x: Math.random() * 100 - 50
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                >
                    <div className="w-1 h-20 bg-gray-300 absolute left-1/2 top-full -translate-x-1/2" />
                </motion.div>
            ))}
        </>
    )
}
