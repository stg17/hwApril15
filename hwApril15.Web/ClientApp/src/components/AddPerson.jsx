import React from "react";
import axios from "axios";
import withRouter from './withRouter';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
    }

    onTextInput = (e) => {
        const copy = this.state.person;
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onSubmitClick = async () => {
        const {firstName, lastName, age} = this.state.person;
        await axios.post('/api/people/addperson',  { firstName, lastName, age: +age});
        this.props.navigate('/');
    }

    render() {
        const {firstName, lastName, age} = this.state;
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 card bg-light p-4 mt-5">
                    <h2>Add a New Person</h2>
                    <input onChange={this.onTextInput} type='text' className="form-control" name='firstName' placeholder="First Name" value={firstName}/>
                    <br/>
                    <input onChange={this.onTextInput} type='text' className="form-control" name='lastName' placeholder="Last Name" value={lastName}/>
                    <br/>
                    <input onChange={this.onTextInput} type='text' className="form-control" name='age' placeholder="Age" value={age}/>
                    <br/>
                    <button onClick={this.onSubmitClick} className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>
        )
    }
}

export default withRouter(AddPerson);