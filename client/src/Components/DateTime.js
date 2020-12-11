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
        <div className="home-grid-center-bottom">
            <h3>{date.toLocaleDateString()}</h3>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}
export default DateTime