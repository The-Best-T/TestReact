import React, {useState} from "react"
import MyButton from "./UI/Button/MyButton";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <h2>{count}</h2>
            <MyButton onClick={() => setCount(count + 1)}>+</MyButton>
            <MyButton onClick={() => setCount(count - 1)}>-</MyButton>
        </div>
    )
}

export default Counter