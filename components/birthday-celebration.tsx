'use client'

import { motion } from 'framer-motion'
import FairyAnimation from './fairy-animation'
import BirthdayCake from './birthday-cake'

const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            type: 'spring',
            damping: 10,
            stiffness: 100
        }
    })
}

export default function BirthdayCelebrationComponent() {
    const title = 'Happy Birthday!'
    const subtitle = 'May your day be filled with magic and wonder!'

    return (
        <div className="text-center">
            <motion.h1
                className="text-6xl font-bold text-blue-800 mb-8 relative"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.08
                        }
                    }
                }}
            >
                {title.split('').map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={letterAnimation}
                        custom={index}
                        className="inline-block"
                        style={{
                            textShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>

            <motion.div
                className="text-2xl text-blue-700 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                {subtitle.split(' ').map((word, index) => (
                    <motion.span
                        key={index}
                        className="inline-block mr-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.5 + index * 0.1,
                            duration: 0.5,
                            type: 'spring'
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>

            <FairyAnimation />
            <BirthdayCake />
        </div>
    )
}
