import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary])

    return (
        <div>
            <Title />
            <Count text={age} count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text={salary} count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent

/*
    Note: When Parent component re-renders it creates new instance of incrementAge and incrementSalary every
            time and as the rule of function equality the instance of function before render and after re-render
            is not same. Hence React thinks that props or state is changed even though they are not changed so
            it re-renders the component every time.

    => useCallBack hook will cache the incrementSalary callback function and will return that if props or state
        related to that function is not changed. 
*/