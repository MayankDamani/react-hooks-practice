import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS' : 
            return {
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_FAIL' : 
            return {
                loading : false,
                error : 'Something went wrong',
                post : {}
            }
        default : 
            return currentState
    }
}

function DataFetching2() {

    const [state, dispatch] = useReducer(reducer, initialState)    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type : 'FETCH_SUCCESS', payload : response.data})
        })
        .catch(error => {
            dispatch({type : 'FETCH_FAIL'})
        });
    }, [])

    return (
        <div>
            {state.loading ? 'Loading Data': state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetching2
