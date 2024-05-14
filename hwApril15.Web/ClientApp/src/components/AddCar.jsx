import React from "react";
import withRouter from './withRouter';
import axios from "axios";


class AddCar extends React.Component {

  state = {
    car: {
      make: '',
      model: '',
      year: ''
    },
    personName: ''
  }

  onTextChange = e => {
    const copy = this.state.car;
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
  }

  setPerson = async () => {
    const id = this.props.params.id;
    const response = await axios.get(`/api/people/getbyid?id=${id}`);
    this.setState({personName: response.data.firstName + ' ' + response.data.lastName});
  }

  componentDidMount = async () => {
    await this.setPerson();
  }

  onSubmitClick = async () => {
    const {make, model, year} = this.state.car;
    const {id} = this.props.params;
    await axios.post("/api/people/addcar", {personId: +id, make, model, year: +year});
    this.props.navigate('/');
  }

  render() {
    const { make, model, year } = this.state.car;
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 card bg-light p-4 mt-5">
          <h2>Add a car for {this.state.personName}</h2>
          <input onChange={this.onTextChange} type="text" className="form-control" name="make" placeholder="Make" value={make} />
          <br />
          <input onChange={this.onTextChange}  type="text" className="form-control" name="model" placeholder="Model" value={model} />
          <br />
          <input onChange={this.onTextChange}  type="text" className="form-control" name="year" placeholder="Year" value={year} />
          <br />
          <button onClick={this.onSubmitClick} className="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
      </div>
    )
  }
}

export default withRouter(AddCar);