import Person from "./Person";

function PeopleList(props) {
    const getPeople = (people) => {
        if (people) {
            return(
                <div className="row">
                    {
                        people.map(person => 
                            <Person key={person.id} person={person} />)
                    }
                </div>
            );
        }
    }

    return (
        <div className="list">
            {getPeople(props.people)}
        </div>
    );
}

export default PeopleList;