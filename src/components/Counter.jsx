import React from 'react'
import { useState } from 'react'

const Counter = () => {
    // let count = 0
    const [count, setCount] = useState(0)

    function buttonClickHandler(e) {

        // count++;

        setCount(count + 1);
    }
    return (
        <div>
            <p>Button clicked {count} times </p>
            <button onClick={buttonClickHandler}>Click me</button>
        </div>
    )
}

export default Counter

