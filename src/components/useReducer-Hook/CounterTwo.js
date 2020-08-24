import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 10
};
const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment' :
            return {...currentState, firstCounter : currentState.firstCounter + action.value}
        case 'decrement' :
            return {...currentState, firstCounter : currentState.firstCounter - action.value}
            case 'increment2' :
                return {...currentState, secondCounter : currentState.secondCounter + action.value}
            case 'decrement2' :
                return {...currentState, secondCounter : currentState.secondCounter - action.value}
        case 'reset' :
            return initialState
        default : 
            return currentState
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>1st Count - {count.firstCounter}</div>
            <div>2nd Count - {count.secondCounter}</div>
            <button onClick={() => {dispatch({type : 'increment', value : 1})}}>
                Increment
            </button>
            <button onClick={() => {dispatch({type : 'decrement', value : 1})}}>
                Decrement
            </button>
            <button onClick={() => {dispatch({type : 'increment', value : 5})}}>
                Increment 5
            </button>
            <button onClick={() => {dispatch({type : 'decrement', value : 5})}}>
                Decrement 5
            </button>
            <div>
                <button onClick={() => {dispatch({type : 'increment2', value : 1})}}>
                    Increment
                </button>
                <button onClick={() => {dispatch({type : 'decrement2', value : 1})}}>
                    Decrement
                </button>
            </div>
            <button onClick={() => {dispatch({type : 'reset'})}}>Reset</button>
        </div>
    )
}

export default CounterTwo
