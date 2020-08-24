import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    useEffect((() => {
        console.log("Useeffect - Updating document title");
        document.title = count;
    }), [count]); // useEffect runs after render of a component. For conditionally render use 2nd parameter for eg: count in our case.

    return (
        <div>
            <input 
             type="text"
             value={name}
             onChange={(e) => {setName(e.target.value)}} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default EffectHookCounter
