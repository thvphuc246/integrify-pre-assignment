import { Link } from "react-router-dom";

function Person(props) {
    return (
        <div className="card col-md-4">
            <div className="card-header text-center">
                <div className="circle">
                    <p class="circle-text">{props.person.name.charAt(0)}</p>
                </div>
                <h1>{props.person.name}</h1>
                <p>{"@" + props.person.username}</p>
                <p>{props.person.website}</p>
                <Link className="btn btn-primary" 
                    to={`/person/${props.person.id}`}>
                        MORE DETAILS
                </Link>
            </div>
        </div>
    );
}

export default Person;