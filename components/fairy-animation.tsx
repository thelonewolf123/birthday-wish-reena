'use client'

import { motion } from 'framer-motion'

export default function FairyAnimationComponent() {
    return (
        <div className="relative w-40 h-40 mx-auto my-8">
            <motion.img
                src="https://media.tenor.com/w1aI3XFrTV0AAAAi/dicedreams-dice.gif" // Ensure you have a fairy GIF in your public folder
                alt="Fairy"
                className="w-full h-full object-contain"
                animate={{
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />
            <motion.div
                className="absolute inset-0 bg-blue-300 rounded-full opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
            />
        </div>
    )
}
