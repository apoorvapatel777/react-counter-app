import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count != 0) {
            setCount(count - 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className='counter'>
            <div className='count' style={{ color: count != 0 ? '#0ac60a' : 'white' }}>Counter : {count}</div>
            <button className='increase_btn' onClick={increaseCount}>+ Increase</button>
            <button className='decrease_btn' onClick={decreaseCount}>- Decrease</button>
            <button className='reset_btn' onClick={resetCount}> Reset</button>
        </div >
    )
}

export default Counter