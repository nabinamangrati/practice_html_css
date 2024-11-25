import usestate from 'react';
const Counter=()=>{
    const [count, setCount]=usestate(0)
    return(
    
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default Counter;
