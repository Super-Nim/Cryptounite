import React from 'react'

const Counter = () => {
    let [count, setCount] = React.useState(0)

    const incrementOne = () => {
        setCount(count + 1);
    }
    return (
        <React.Fragment>
            <p>The count is: {count}</p>
            <button onClick={incrementOne}> Increment</button>
            <button> Decrement </button>
        </React.Fragment>
        
    )
}


export default Counter;