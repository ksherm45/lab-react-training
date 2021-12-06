import {useState} from 'react'

function LikeButton() {
    let [count, setCount] = useState(0)

    function handleClick(event){
        setCount(count++)
    }

    return(
        <button onClick={handleClick}>
            Like {count}
        </button>
    )
}

export default LikeButton