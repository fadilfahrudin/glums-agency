import {useEffect, useState} from 'react'

export default function useResponsive(query: string) {
    const [isMatch, setIsMatch] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        const listener = () => setIsMatch(mediaQuery.matches)

        listener()
        mediaQuery.addEventListener('change', listener)
        return () => mediaQuery.removeEventListener('change', listener)
    }, [query])

    return isMatch
}