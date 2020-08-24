import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    return (
        <div>
           <button onClick={() => setCount(count + 1)}>Count {count}</button> 
        </div>
    )
}

export default HookCounter

/* Rules for Hooks

1. Only call Hooks at the top level. Don't call hooks inside loops, conditions and nested functions.
2. Only call hooks from react functions instead of regular Javascript components.
*/
