import React, { useState } from 'react'

export default function HookCounter() {

    const [counter, setCounter] = useState(0)
    return (
        <div>
            Counter {counter}
            <button onClick={() => setCounter(counter + 1)}>INC</button>
            <button onClick={() => setCounter(counter - 1)}>DEC</button>
        </div>
    )
}
