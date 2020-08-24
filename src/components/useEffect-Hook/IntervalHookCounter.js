import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    }

    // const tick = () => {
    //     setCount(prevCount => prevCount + 1);
    // } // Then mention empty dependency list of array bcoz now prevCount will handle the previous values.

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []) // Empty Array or Dependency Array [] tells react to ignore watching the changes in the count variable.

    useEffect(() => {
        // function doSomething() {
        //     console.log(prop)
        // } // then mention prop in dependency list array.
        const interval = setInterval(tick, 1000);
    
        return () => {
            clearInterval(interval);
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter

// Tip : If you want to call function from useEffect it is recommended to define function in useEffect.