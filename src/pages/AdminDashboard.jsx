import { Link } from "react-router-dom"
import AvailableSeats from "../components/AvailableSeats"
import ResetButton from "../components/ResetButton"
import Revenue from "../components/Revenue"


const AdminDashboard = () => {
    return (
        <main>
            <h2>Die Übersicht</h2>
            <section className="dashboardSection">
                <article className="dashboard">
                    <AvailableSeats />
                    <Revenue />
                </article>
                <ResetButton />
            </section>
            <Link to='/'>Zurück zur Kinowelt</Link>
        </main>
    )
}

export default AdminDashboard