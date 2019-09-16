import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            subject:'',
            message:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMultiSelect = this.handleMultiSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]:value}, () => {
            console.log(this.state[name])
        });
    }

    handleMultiSelect(event){
        this.setState({[event.target.name]: [...event.target.selectedOptions].map(o => o.value)}); 
    }

    handleSubmit() {
        alert(`Name: ${this.state.name}, Email: ${this.state.email}, Subject: ${this.state.subject}, Message: ${this.state.message}`);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput labelFor="name" label="Name" className="form-control" type="text" name="name" id="name" value={this.state.name} handleChange={this.handleChange}/>
                <TextInput labelFor="email" label="E-mail" className="form-control" type="email" name="email" id="email" value={this.state.email} handleChange={this.handleChange}/>
                <TextInput labelFor="subject" label="Subject" className="form-control" type="text" name="subject" id="subject" value={this.state.subject} handleChange={this.handleChange}/>
                <TextInput labelFor="message" label="Message" className="form-control" type="text" name="message" id="message" value={this.state.message} handleChange={this.handleChange}/>
                <Button type="submit" className="btn btn-primary form-control">Submit</Button>
            </form>
        )
    }
}

export default Form;

