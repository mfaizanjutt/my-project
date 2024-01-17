import { useState } from "react"


export default function Question01()
{
    let array=[11,12,13,14,15]
    let array2=[];
    const [first, setFirst] = useState(array)
    const [second,setSecond]=useState(array2)
    var reverse=[];
    function Inverse()
    {
        for(let i=first.length-1;i>=0;i--)
        {
            setFirst.push(first[i])
            setSecond(array2)
            setSecond.push(first[i])
        }
    }
    return(
        <div>
            <h1>{first}</h1>
            <h2>{second}</h2>
            <h1>{reverse}</h1>
            <button className="border" onClick={Inverse}>onClick</button>
        </div>
    )
}