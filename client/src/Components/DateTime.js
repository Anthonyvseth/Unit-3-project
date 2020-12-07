import React, {useState, useEffect} from 'react'


export const DateTime = () => {
    
    let [date, setDate] = useState(new Date())

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()))

        return function cleanup() {
            clearInterval(timer)
        }      
    })

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <h3>{date.toLocaleDateString()}</h3>
        </div>
    )
}
export default DateTime