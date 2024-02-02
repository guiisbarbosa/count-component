import { useState } from "react"
import Button from "../button/button"
import './count.css'

const Count = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <h2>Contador: <span>{count}</span></h2>
            <div className="buttons">
                <Button name="+1" compClass="agree" onClick={() => setCount(count +1)}/>
                <Button name="-1" compClass="decline" onClick={() => setCount(count - 1)}/>
            </div>
        </div>
    )
}

export default Count
