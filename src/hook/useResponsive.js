import { useEffect } from "react"
import { useState } from "react"

const useResponsive = (minWidth) => {
    const [state, setState] = useState({
        windowWidth: 0,
        isDesiredWidth: false
    })

    useEffect(() => {
        const currentWindowWidth = window.innerWidth
        const isDesiredWidth = currentWindowWidth > minWidth

        setState({ windowWidth: currentWindowWidth, isDesiredWidth })
    }, [minWidth])

    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth
            const isDesiredWidth = currentWindowWidth > minWidth

            setState({ windowWidth: currentWindowWidth, isDesiredWidth })
        }

        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }

    }, [minWidth, state.windowWidth])

    return state.isDesiredWidth
}

export default useResponsive