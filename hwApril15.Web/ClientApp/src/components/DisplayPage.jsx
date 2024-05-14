import React from "react";
import { Link } from "react-router-dom";
import PersonRow from "./PersonRow";
import axios from "axios";

class DisplayPage extends React.Component {

    state = {
        people: [],
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get("/api/people/getpeople");
        this.setState({people: response.data});
    }

    render() {
        const {people} = this.state;
        return (<div className="container" style={{ marginTop: 75 }}>
            <div className="row">
                <div className="col-md-10">
                    <input type="text" className="form-control form-control-lg" placeholder="Search People" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-dark btn-lg w-100">Clear</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12">
                    <Link to={"/addperson"}>
                        <button className="btn btn-success btn-lg w-100">Add Person</button>
                    </Link>
                </div>
            </div>
            <table className="table table=hover table-striped table-bordered mt-3">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Car Count</th>
                        <th>Add Car</th>
                        <th>Delete Cars</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => <PersonRow
                    key={person.id}
                    person={person}
                    carCount={person.cars.length}
                    />)}
                </tbody>
            </table>
        </div>)
    }
}

export default DisplayPage;