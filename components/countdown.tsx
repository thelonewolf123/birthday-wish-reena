'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CountdownComponent({
    targetDate,
    onComplete
}: {
    targetDate: Date
    onComplete: () => void
}) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    function calculateTimeLeft() {
        const difference = +targetDate - +new Date()
        let timeLeft: Record<string, number> = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const newTimeLeft = calculateTimeLeft()
            setTimeLeft(newTimeLeft)
            if (Object.keys(newTimeLeft).length === 0) {
                onComplete()
            }
        }, 1000)

        return () => clearTimeout(timer)
    })

    const AnimatedNumber = ({
        number,
        label
    }: {
        number: number
        label: string
    }) => (
        <div className="flex flex-col items-center mx-2">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={number}
                    initial={{ y: 20, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -20, opacity: 0, rotateX: 90 }}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100
                    }}
                    className="text-5xl font-bold text-blue-700"
                >
                    {number}
                </motion.span>
            </AnimatePresence>
            <motion.span
                className="text-sm text-blue-600"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                {label}
            </motion.span>
        </div>
    )

    return (
        <div className="text-center">
            <motion.h2
                className="text-4xl font-bold text-blue-800 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Birthday Countdown
            </motion.h2>
            <motion.div
                className="flex justify-center items-center mb-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <AnimatedNumber number={timeLeft.days} label="Days" />
                <AnimatedNumber number={timeLeft.hours} label="Hours" />
                <AnimatedNumber number={timeLeft.minutes} label="Minutes" />
                <AnimatedNumber number={timeLeft.seconds} label="Seconds" />
            </motion.div>
        </div>
    )
}
