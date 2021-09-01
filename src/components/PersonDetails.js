import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PersonDetails(props) {
    let [person, setPerson] = useState(props);
    let [company, setCompany] = useState(props);
    let [address, setAddress] = useState(props);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPerson(data);
            setCompany(data.company);
            setAddress(data.address);
        })
    },[id]);

    return (
        <div className="card card-body text-center" key={ id }>
            <h1>Name: {person.name}</h1>
            <h2>Name: {person.username}</h2>
            <h4>Email: {person.email}</h4>
            <h4>Phone: {person.phone}</h4>
            <h4>Company: {company.name}</h4>
            <h4>Website: {person.website}</h4>
            <h4>Address:</h4>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
        </div>
    );
}

export default PersonDetails;