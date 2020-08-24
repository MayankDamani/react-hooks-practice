import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect((() => {
        console.log("useEffect Called");
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Cleanup code i.e. componentWillUnmount');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }), []); // Similar to componentDidMount. 
    
    return (
        <div>
            Hooks - X{x} and Y-{y}
        </div>
    )
}

export default HookMouse
