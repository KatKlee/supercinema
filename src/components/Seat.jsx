import { useState } from "react"

const Seat = (props) => {
    const [state, setState] = useState(true)

    const changeBooking = () => {
        setState(!state)

        /* fetch('http://localhost:7777/seats', {
            method: 'PUT', 
            
            – lieber POST? da ich das gelesen habe:
            "If you send the same PUT request multiple times, the result will remain the same"
            – Das wäre doch hinderlich wenn wir booken/entbooken

            body: JSON.stringify(state:!state)?
            headers: ist hier default gesetzt, der für unseren Fall (boolean) schon gegeben ist?
        }) */
        //  .then(res => res.status(200).json(state))
        //  .catch(res => res.status(500).send({message: changing of booking failed}))
    }
    return (
        <div className={`seatStyle ${props.category} ${!state ? 'true' : null}`} onClick={changeBooking}></div >
    )
}

export default Seat