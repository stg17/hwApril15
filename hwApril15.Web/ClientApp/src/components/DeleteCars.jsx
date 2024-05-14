import React from "react";
import withRouter from "./withRouter";
import axios from "axios";

class DeleteCars extends React.Component {

    state = {
        cars: []
    }

    componentDidMount = async () => {
        const response = await axios.get(`/api/people/getcars?personId=${this.props.params.id}`);
        this.setState({ cars: response.data });
    }

    deleteCars = async () => {
        await axios.post("/api/people/deletecars", { id: this.props.params.id });
        this.cancel();
    }

    cancel = () => {
        this.props.navigate('/');
    }

    render() {
        const { cars } = this.state;
        return (
            <>
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(c =>
                                    <tr>
                                        <td>{c.make}</td>
                                        <td>{c.model}</td>
                                        <td>{c.year}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6" >
                        <button onClick={this.cancel} className="btn btn-primary btn-lg w-100">No</button>
                    </div>
                    <div className="col-md-6">
                        <button onClick={this.deleteCars} className="btn btn-danger btn-lg w-100">Yes</button>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCars);