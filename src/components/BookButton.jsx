const BookButton = (props) => {

    const sendData = () => {
        fetch('http://localhost:7777/api/mail', {
            method: 'POST',
            body: JSON.stringify(props.clientData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(console.log(props.clientData))

    }


    return (
        <button className="bookButton" onClick={sendData}>BUCHEN</button>
    )
}
export default BookButton