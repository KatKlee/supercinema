import { useState } from "react"

const EmailForm = () => {

    const [clientData, setClientData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    })

    const updateData = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    return (
        <>
            <form className="emailForm" onChange={(e) => updateData(e)} clientData={clientData}>
                <input type="text" name="firstname" id="" placeholder="Vorname" />
                <input type="text" name="lastname" id="" placeholder="Nachname" />
                <input type="email" name="email" id="" placeholder="example@mail.com" />
            </form>
        </>
    )
}

export default EmailForm