import { useEffect, useState } from "react"

/**
 * 
 * @param query Media query
 * @example (min-width: 768px)
 * @returns 
 */
export function useMediaQuery(query: string) {
    const [value, setValue] = useState(false)

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener("change", onChange)
        setValue(result.matches)

        return () => result.removeEventListener("change", onChange)
    }, [query])

    return value
}