import { useEffect, useState } from "react"
import Seat from "./Seat"

const Seats = () => {
    const [allSeats, setAllSeats] = useState([])

    useEffect(() => {
        fetch('http://localhost:7777/seats')
            .then(res => res.json())
            .then(data => setAllSeats(data))
    }, [])

    return (
        <>
            <h2>Meine Platzwahl</h2>

            <section className="seatlist">
                <div className="leinwand">Leinwand</div>
                {allSeats.map((item) =>
                    <Seat
                        key={item.id}
                        category={item.category.toLowerCase()}
                    />
                )}
            </section>
        </>
    )
}

export default Seats