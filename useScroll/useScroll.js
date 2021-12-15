import { useEffect, useState } from "react"

export const useScroll = () => {
    const [state, setstate] = useState({ x: 0, y: 0 })

    const onScroll = () => {
        //윈도우의 스코롤 위치
        setstate({ x: window.scrollX, y: window.scrollY })
    }
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    return state;
}