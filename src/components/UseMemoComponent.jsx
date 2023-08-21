import React, { useState } from 'react'

export default function UseMemoComponent() {
    const [number, setNumber] = useState(0);
    const doubleNumber = slow(number);

    return (
        <div>
            <input type='number' value={number} onChange={e=> setNumber(parseInt(e.target.value))}></input>
            <div>{doubleNumber}</div>
        </div>
    )
}

function slow(number) {
    console.log("Calling slow function");
    for (let index = 0; index < 100000000; index++) { };
    return number * 2;
}
