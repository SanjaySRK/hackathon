import React, {Component} from 'react'
import '../components/Login.css'
class Login extends Component {
    state = {
        name: null,
        email: null,
   }
   handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state);
    }
    render() {
        return (
            <div className="bg-image">
                <div className = "row logins">
                    <div className="col s12 l4 offset-l4">
                        <div className="card">
                            <div className="card-action white">
                            <span class="card-title black-text ">Login</span>
                            </div>
                            <div className="card-content">
                                <form onSubmit={this.handleOnSubmit}>
                                    <label htmlFor="name">E-mail: </label>
                                    <input type="text" id="name" onChange = { this.handleOnChange } />
                                    <label htmlFor="rollno">Password: </label>
                                    <input type="text" id="rollno" onChange = { this.handleOnChange } /><br />
                                    <div className="center-align">
                                        <button className="btn transparent white-text waves-effect ">Submit
                                        <i class="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;