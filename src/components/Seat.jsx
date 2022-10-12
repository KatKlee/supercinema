import { useState } from "react"

const Seat = (props) => {
    const [state, setState] = useState(true)

    const changeBooking = () => {
        setState(!state)

        const seatID = props.seatnumber
        console.log(seatID)
        console.log(JSON.stringify({ id: seatID }))

        fetch('http://localhost:7777/seats', {
            method: 'PUT',
            body: JSON.stringify({ id: seatID }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.status(200).json())
            .catch(res => res.status(500).send({ message: 'changing of booking failed' }))
        console.log('Fetch hat geklappt')

    }
    return (
        <div className={`seatStyle ${props.category} ${!state ? 'true' : null}`} onClick={changeBooking}></div >
    )
}

export default Seat