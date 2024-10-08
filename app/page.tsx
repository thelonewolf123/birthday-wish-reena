import { BirthdayWebsiteComponent } from '@/components/birthday-website'
import { Suspense } from 'react'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BirthdayWebsiteComponent />
        </Suspense>
    )
}
