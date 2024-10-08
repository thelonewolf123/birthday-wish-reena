'use client'

import { useState, useEffect } from 'react'
import Countdown from './countdown'
import BirthdayCelebration from './birthday-celebration'
import FloatingBalloons from './floating-balloons'
import SparklingGraphics from './sparkling-graphics'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'

export function BirthdayWebsiteComponent() {
    const [isCountdownComplete, setIsCountdownComplete] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const searchParams = useSearchParams()
    const targetDate = searchParams.has('show')
        ? new Date('2024-10-08T00:00:00')
        : new Date('2024-10-09T00:00:00') // Set this to the birthday date

    useEffect(() => {
        const audio = new Audio('/birthday-song.m4a') // Ensure this file is in your public folder
        audio.loop = true
        audio.currentTime = 8

        if (!isMuted) {
            audio
                .play()
                .catch((error) => console.log('Audio play failed:', error))
        }

        return () => {
            audio.pause()
            audio.currentTime = 8
        }
    }, [isMuted])

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center justify-center p-4 overflow-hidden relative">
            <SparklingGraphics />

            {!isCountdownComplete ? (
                <Countdown
                    targetDate={targetDate}
                    onComplete={() => setIsCountdownComplete(true)}
                />
            ) : (
                <div>
                    <FloatingBalloons />
                    <BirthdayCelebration />
                </div>
            )}

            <Button
                onClick={() => setIsMuted(!isMuted)}
                className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 z-50"
            >
                {isMuted ? 'Unmute' : 'Mute'} Music
            </Button>
        </div>
    )
}
