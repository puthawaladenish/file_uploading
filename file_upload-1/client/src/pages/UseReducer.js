import React, { useReducer } from 'react'

// useReducer with single state variable useReducer
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }
// function UseReducer() {
//     const [count, dispatch] = useReducer(reducer, initialState)
//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={() => dispatch('increment')}>Increment</button>
//             <button onClick={() => dispatch('decrement')}>Decrement</button>
//             <button onClick={() => dispatch('reset')}>Reset</button>
//         </div>
//     )
// }




// variable with action Object
// const init = {
//     firstCounter: 0
// }
// const objReducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { firstCounter: state.firstCounter + 1 }
//         case 'decrement':
//             return { firstCounter: state.firstCounter - 1 }
//         case 'increment5':
//             return { firstCounter: state.firstCounter + action.value }
//         case 'decrement5':
//             return { firstCounter: state.firstCounter - action.value }
//         case 'reset':
//             return init
//         default:
//             return state
//     }
// }

// function UseReducer() {
//     const [state, dispatch] = useReducer(objReducer, init)
//     return (
//         <div>
//             <div>{state.firstCounter}</div>
//             <button onClick={() => dispatch({ type: 'increment' })}>Increment by 1</button>
//             <button onClick={() => dispatch({ type: 'decrement' })}>Decrement by 1</button>
//             <button onClick={() => dispatch({ type: 'increment5', value: 5 })}>Decrement by 5</button>
//             <button onClick={() => dispatch({ type: 'decrement5', value: 5 })}>Decrement by 5</button>
//             <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
//         </div>
//     )
// }

// useReducer with multiple state object and multiple action object 
const initialState = {
    firstCounter : 0,
    secondCounter: 50
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'incrementFirst':            
            return {...state, firstCounter :state.firstCounter  + action.value }    
        case 'decrementFirst':
            return {...state, firstCounter : state.firstCounter - action.value}
        case 'incrementSecond':
            return {...state, secondCounter :state.secondCounter  + action.value}
        case 'decrementSecond' :
            return {...state, secondCounter : state.secondCounter - action.value}
        case 'resetFirst':
            return {...state, firstCounter : initialState.firstCounter}
        case 'resetSecond':
            return {...state, secondCounter: initialState.secondCounter}
        default:
           return state;
    }
}
function UseReducer() {
    const [counts, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter: {counts.firstCounter} Second Counter: {counts.secondCounter}</div>
            <button onClick={()=>dispatch({type:'incrementFirst', value:1})}>counter one incremtn by 1</button>
            <button onClick={()=>dispatch({type:'decrementFirst', value:1})}> counter one decrement by 1</button>
            <button onClick={()=>dispatch({type:'incrementSecond', value:2})}>counter two increment by 2</button>
            <button onClick={()=>dispatch({type:'decrementSecond', value:2})}>count two decrement by 2</button>
            <button onClick={()=>dispatch({type:'resetFirst'})}>resetfirst</button>
            <button onClick={()=>dispatch({type:'resetSecond'})}>resetSecond</button>
        </div>
    )
}








export default UseReducer
