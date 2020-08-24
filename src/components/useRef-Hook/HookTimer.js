import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1) 
        }, 1000)

        return() => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook Timer - {timer} 
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>   
        </div>
    )
}

export default HookTimer

// useRef can be used to store any mutable value. Value stored in useRef will persist through the re-renders while also not causing any additonal renders when its value changes
