'use client'

import { motion } from 'framer-motion'

export default function BirthdayCakeComponent() {
    return (
        <div className="relative w-60 h-60 mx-auto mt-8">
            <motion.div
                className="w-full h-3/4 bg-pink-300 rounded-lg absolute bottom-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            />
            <motion.div
                className="w-3/4 h-1/2 bg-pink-400 rounded-lg absolute bottom-1/4 left-1/8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
            />
            <motion.div
                className="w-1/2 h-1/4 bg-pink-500 rounded-lg absolute bottom-1/2 left-1/4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: 'spring' }}
            />
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 h-8 bg-yellow-400 absolute bottom-3/4"
                    style={{ left: `${20 + i * 15}%` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.3 }}
                >
                    <motion.div
                        className="w-4 h-4 bg-red-500 rounded-full absolute -top-2 -left-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{
                            delay: 1.9 + i * 0.1,
                            duration: 0.5,
                            type: 'spring'
                        }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
